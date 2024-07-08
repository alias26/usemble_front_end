<template>
    <div class="p-3 mt-4">
        <h4>소셜링 관리</h4>
        <table class="table table-bordered text-center">
            <tr>
                <th style="width: 1%">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="1" />
                    </div>
                </th>
                <th style="width: 40px">번호</th>
                <th style="width: 400px">제목</th>
                <th style="width: 80px">글쓴이</th>
                <th style="width: 90px">작성일</th>
                <th style="width: 80px">관리</th>
            </tr>
            <tr v-for="social in page.socials" :key="social.sno">
                <td>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="1" />
                    </div>
                </td>
                <td>{{ social.sno }}</td>
                <td>{{ social.stitle }}</td>
                <td>{{ social.mid }}</td>
                <td>{{ formatDate(social.swriteDate) }}</td>
                <td>{{ social.sstatus }}</td>
            </tr>
            <tr>
                <td colspan="5" class="text-center">
                    <button class="btn btn-sm me-1" @click="changePageNo(1)">처음</button>
                    <button
                        v-if="page.pager.groupNo > 1"
                        class="btn btn-sm me-1"
                        @click="changePageNo(page.pager.startPageNo - 1)"
                    >
                        이전
                    </button>
                    <button
                        v-for="pageNo in page.pager.pageArray"
                        :key="pageNo"
                        class="btn btn-sm me-1"
                        @click="changePageNo(pageNo)"
                    >
                        {{ pageNo }}
                    </button>
                    <button
                        v-if="page.pager.groupNo < page.pager.totalGroupNo"
                        class="btn btn-sm me-1"
                        @click="changePageNo(page.pager.endPageNo + 1)"
                    >
                        다음
                    </button>
                    <button class="btn btn-sm me-1" @click="changePageNo(page.pager.totalPageNo)">
                        맨끝
                    </button>
                </td>
            </tr>
        </table>
    </div>
</template>

<script setup>
import { ref, watch } from "vue";
import adminAPI from "@/apis/adminAPI";
import { useRoute, useRouter } from "vue-router";

const page = ref({
    socials: [],
    pager: {},
});

const route = useRoute();
const pageNo = ref(route.query.pageNo || 1);

async function getSocialList(pageNo) {
    try {
        const response = await adminAPI.getSocialList(pageNo);
        page.value.socials = response.data.socials;
        page.value.pager = response.data.pager;
        console.log(page.value.socials);
        //page.value = response.data;
    } catch (error) {
        console.log(error);
    }
}
function formatDate(dateString) {
    const options = { year: "numeric", month: "long", day: "numeric", weekday: "long" };
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("ko-KR", options).format(date);
}

const router = useRouter();
function changePageNo(argPageNo) {
    router.push(`/Admin/SocialingTable?pageNo=${argPageNo}`);
}

//요청 경로의 변경을 감시
watch(route, (newRoute, oldRoute) => {
    if (newRoute.query.pageNo) {
        getSocialList(newRoute.query.pageNo);
        pageNo.value = newRoute.query.pageNo;
    } else {
        getSocialList(1);
        pageNo.value = 1;
    }
});
getSocialList(pageNo.value);
</script>

<style scoped></style>
