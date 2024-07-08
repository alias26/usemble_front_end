<template>
    <div class="p-3 mt-4">
        <h4>후기 관리</h4>
        <table class="table table-bordered text-center">
            <tr style="height: 50px">
                <th style="width: 150px">참여한 소셜링</th>
                <th style="width: 200px">내용</th>
                <th style="width: 90px">날짜</th>
                <th style="width: 40px">작성자</th>
                <th style="width: 40px">관리</th>
            </tr>
            <tr v-for="review in page.reviews" :key="review.mid">
                <!-- <td>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="1" />
                    </div>
                </td> -->
                <td>{{ review.stitle }}</td>
                <td class="rcontent">{{ review.rcontent }}</td>
                <td>{{ formatDate(review.rdate) }}</td>
                <td>{{ review.mid }}</td>
            </tr>
        </table>
    </div>
</template>

<script setup>
import { ref, watch } from "vue";
import adminAPI from "@/apis/adminAPI";
import { useRoute, useRouter } from "vue-router";

const page = ref({
    reviews: [],
    pager: {},
});

const route = useRoute();
const pageNo = ref(route.query.pageNo || 1);

async function getReviewList(pageNo) {
    try {
        const response = await adminAPI.getReviewList(pageNo);
        page.value.reviews = response.data.reviews;
        page.value.pager = response.data.pager;
        console.log(page.value.reviews);
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
    router.push(`/Admin/ReviewTable?pageNo=${argPageNo}`);
}
//요청 경로의 변경을 감시
watch(route, (newRoute, oldRoute) => {
    if (newRoute.query.pageNo) {
        getReviewList(newRoute.query.pageNo);
        pageNo.value = newRoute.query.pageNo;
    } else {
        getReviewList(1);
        pageNo.value = 1;
    }
});

getReviewList(pageNo.value);
</script>

<style scoped>
img {
    width: 55px;
    height: 55px;
    border-radius: 50%;
}
.rcontent {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 200px; /* Adjust the max-width as needed */
}
</style>
