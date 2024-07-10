<template>
    <div
        class="main ms-auto me-auto"
        style="height: auto; width: 65%; min-width: 700px; margin-top: 60px"
    >
        <SocialHeader
            :title="member.mname + '님이 진행 중인 어셈블'"
            @handleCategory="handleCategory"
            @handleSort="handleSort"
        />
        <div class="row" style="display: flex; margin-top: 40px">
            <SocialCard
                v-for="social in inprograss.socialList"
                :key="social.sno"
                class="col-4"
                style="width: 32%"
                :social="social"
            />
        </div>
        <div v-if="inprograss.socialList.length != 0" class="d-flex justify-content-center mt-4">
            <button
                v-if="inprograss.pager.startPageNo > 1"
                class="btn page-btn btn-sm me-1"
                @click="changePageNo(inprograss.pager.startPageNo - 1)"
            >
                이전
            </button>
            <button
                v-for="pageNo in inprograss.pager.pageArray"
                :key="pageNo"
                :class="inprograss.pager.pageNo == pageNo ? 'cur-page' : ''"
                class="btn page-btn btn-sm me-1"
                @click="changePageNo(pageNo)"
            >
                {{ pageNo }}
            </button>
            <button
                v-if="inprograss.pager.groupNo < inprograss.pager.totalGroupNo"
                class="btn page-btn btn-sm me-1"
                @click="changePageNo(inprograss.pager.endPageNo + 1)"
            >
                다음
            </button>
        </div>
    </div>
</template>

<script setup>
import SocialCard from "@/components/Social/SocialCard.vue";
import SocialHeader from "@/components/Social/SocialHeader.vue";
import { onMounted, ref, watch } from "vue";
import socialAPI from "@/apis/socialAPI";
import { useRoute, useRouter } from "vue-router";
import memberAPI from "@/apis/memberAPI";
import { useStore } from "vuex";

const route = useRoute();
const router = useRouter();

const member = ref({
    mname: "",
});

const mid = ref(route.query.mid);
const pageNo = ref(route.query.pageNo || 1);
const ctno = ref(route.query.ctno || 0);
const sort = ref(route.query.sort || null);

// 쿼리스트링으로 받은 mid로 mname 받기
async function getMember(mid) {
    try {
        const response = await memberAPI.getUserProfile(mid);
        member.value.mname = response.data.member.mname;
    } catch (error) {
        console.log(error);
    }
}

getMember(route.query.mid);

// 진행 중인 전체 보기
const inprograss = ref({
    pager: {},
    socialList: [],
});

async function getRecruit(mid, pageNo, ctno, sort) {
    try {
        const response = await socialAPI.inprograss(mid, pageNo, ctno, sort);
        inprograss.value.pager = response.data.pager;
        inprograss.value.socialList = response.data.socialList;
    } catch (error) {
        console.log(error);
    }
}

getRecruit(mid.value, pageNo.value, ctno.value, sort.value);

function changePageNo(pageNo) {
    router.replace({
        query: {
            mid: route.query.mid,
            pageNo: pageNo,
            ctno: route.query.ctno,
            sort: route.query.sort,
        },
    });
}

function handleCategory(ctno) {
    router.replace({
        query: {
            mid: route.query.mid,
            pageNo: 1,
            ctno: ctno,
            sort: route.query.sort,
        },
    });
}

function handleSort(sort) {
    router.replace({
        query: {
            mid: route.query.mid,
            pageNo: 1,
            ctno: route.query.ctno,
            sort: sort,
        },
    });
}

const store = useStore();
watch(
    () => route.query.pageNo,
    (newPageNo, oldPageNo) => {
        if (store.state.activeWatch) {
            if (newPageNo) {
                getRecruit(mid.value, newPageNo, ctno.value, sort.value);
                pageNo.value = newPageNo;
            } else {
                getRecruit(mid.value, 1, ctno.value, sort.value);
                pageNo.value = 1;
            }
        }
    }
);

watch(
    () => route.query.ctno,
    (newCtno, oldCtno) => {
        if (store.state.activeWatch) {
            if (newCtno) {
                getRecruit(mid.value, pageNo.value, newCtno, sort.value);
                ctno.value = newCtno;
            } else {
                getRecruit(mid.value, 1, 0, sort.value);
                pageNo.value = 1;
                ctno.value = 0;
                sort.value = null;
            }
        }
    }
);

watch(
    () => route.query.sort,
    (newSort, oldSort) => {
        if (store.state.activeWatch) {
            if (newSort) {
                getRecruit(mid.value, pageNo.value, route.query.ctno, newSort);
                sort.value = newSort;
            } else {
                getRecruit(route.query.mid, 1, route.query.ctno, null);
                pageNo.value = 1;
                ctno.value = 0;
                sort.value = null;
            }
        }
    }
);
</script>

<style scoped>
.cur-page {
    font-weight: 800;
    color: #558ccf;
}

.page-btn {
    border: none;
    outline: none;
}

.cur-page:focus {
    border: none;
    outline: none;
}
</style>
