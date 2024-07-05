<template>
    <div class="d-flex">
        <div id="history">
            <div class="mb-5 text-center fw-bold fs-5">
                <i class="bi bi-house-door me-1" style="font-size: 45px"></i>
                <p>어셈블 내역</p>
            </div>
            <div class="hr"></div>
            <div class="nav">
                <div class="nav-item">
                    <button class="nav-link fw-bold" :class="{ active: apply }" @click="applyClick">
                        신청 내역
                    </button>
                </div>
                <div class="nav-item">
                    <button
                        class="nav-link fw-bold"
                        :class="{ active: recruit }"
                        @click="recruitClick"
                    >
                        모집 내역
                    </button>
                </div>
            </div>
            <div class="bg-light text-center history-space">
                <div class="hr"></div>
                <div id="tabContent" class="text-secondary text-start" style="font-size: 14px">
                    <div v-if="apply">
                        <div class="history-empty" v-if="joinHistoryPage.joinHistory.length == 0">
                            <div>아직 신청한 어셈블이 없으시네요!</div>
                            <div class="mb-4">지금 바로 어셈블에 놀러가 보세요.</div>
                            <button
                                class="p-3 bg-black text-white rounded-1 fw-bold"
                                style="font-size: 14px; border: none"
                                @click="goAssembleList"
                            >
                                어셈블 둘러보기
                            </button>
                        </div>
                        <ApplicationDetail
                            v-for="join in joinHistoryPage.joinHistory"
                            :key="join.sno"
                            :application="join"
                            @reload="reloadApplication"
                        />
                    </div>
                    <div v-if="recruit">
                        <div
                            class="history-empty"
                            v-if="recruitHistoryPage.recruitHistory.length == 0"
                        >
                            <div>아직 만드신 어셈블이 없으시네요!</div>
                            <div class="mb-4">지금 바로 어셈블해보세요.</div>
                            <button
                                class="p-3 bg-black text-white rounded-1 fw-bold"
                                style="font-size: 14px; border: none"
                                @click="goWriteAssemble"
                            >
                                어셈블 작성하기
                            </button>
                        </div>
                        <RecruitmentDedatil
                            v-for="recruitment in recruitHistoryPage.recruitHistory"
                            :key="recruitment.sno"
                            :recruitment="recruitment"
                            @reload="getRecruitHistoryPage(jPageNo, store.state.mid)"
                        />
                    </div>
                </div>
            </div>
            <div
                v-if="joinHistoryPage.joinHistory.length != 0 && apply"
                class="d-flex justify-content-center mt-4"
            >
                <button
                    v-if="joinHistoryPage.pager.startPageNo > 1"
                    class="btn page-btn btn-sm me-1"
                    @click="changeJpageNo(joinHistoryPage.pager.startPageNo - 1, $store.state.mid)"
                >
                    이전
                </button>
                <button
                    v-for="pageNo in joinHistoryPage.pager.pageArray"
                    :key="pageNo"
                    :class="joinHistoryPage.pager.pageNo == pageNo ? 'cur-page' : ''"
                    class="btn page-btn btn-sm me-1"
                    @click="changeJpageNo(pageNo, $store.state.mid)"
                >
                    {{ pageNo }}
                </button>
                <button
                    v-if="joinHistoryPage.pager.groupNo < joinHistoryPage.pager.totalGroupNo"
                    class="btn page-btn btn-sm me-1"
                    @click="changeJpageNo(joinHistoryPage.pager.endPageNo + 1, $store.state.mid)"
                >
                    다음
                </button>
            </div>
            <div
                v-if="recruitHistoryPage.recruitHistory.length != 0 && recruit"
                class="d-flex justify-content-center mt-4"
            >
                <button
                    v-if="recruitHistoryPage.pager.startPageNo > 1"
                    class="btn page-btn btn-sm me-1"
                    @click="
                        changeRpageNo(recruitHistoryPage.pager.startPageNo - 1, $store.state.mid)
                    "
                >
                    이전
                </button>
                <button
                    v-for="pageNo in recruitHistoryPage.pager.pageArray"
                    :key="pageNo"
                    :class="recruitHistoryPage.pager.pageNo == pageNo ? 'cur-page' : ''"
                    class="btn page-btn btn-sm me-1"
                    @click="changeRpageNo(pageNo, $store.state.mid)"
                >
                    {{ pageNo }}
                </button>
                <button
                    v-if="recruitHistoryPage.pager.groupNo < recruitHistoryPage.pager.totalGroupNo"
                    class="btn page-btn btn-sm me-1"
                    @click="changeRpageNo(recruitHistoryPage.pager.endPageNo + 1, $store.state.mid)"
                >
                    다음
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import socialAPI from "@/apis/socialAPI";
import ApplicationDetail from "./ApplicationDetail.vue";
import RecruitmentDedatil from "./RecruitmentDetail.vue";
import { onMounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";

// 신청 내역이 활성화 되어 있는 상태
const apply = ref(true);
const recruit = ref(false);

const store = useStore();
const router = useRouter();

const route = useRoute();
const jPageNo = ref(route.query.jPageNo || 1);
const rPageNo = ref(route.query.rPageNo || 1);

const applyClick = () => {
    apply.value = true;
    recruit.value = false;
};

const recruitClick = () => {
    apply.value = false;
    recruit.value = true;
};

const joinHistoryPage = ref({
    pager: {},
    joinHistory: [],
});

const recruitHistoryPage = ref({
    pager: {},
    recruitHistory: [],
});

async function getJoinHistoryPage(pageNo, mid) {
    try {
        const response = await socialAPI.getJoinHistory(pageNo, mid);
        joinHistoryPage.value.pager = response.data.pager;
        joinHistoryPage.value.joinHistory = response.data.joinHistory;
    } catch (error) {
        console.log(error);
    }
}

getJoinHistoryPage(jPageNo.value, store.state.mid);

async function getRecruitHistoryPage(pageNo, mid) {
    try {
        const response = await socialAPI.getRecruitHistory(pageNo, mid);
        recruitHistoryPage.value.pager = response.data.pager;
        recruitHistoryPage.value.recruitHistory = response.data.recruitHistory;
    } catch (error) {
        console.log(error);
    }
}

getRecruitHistoryPage(rPageNo.value, store.state.mid);

function goAssembleList() {
    router.push("/list");
}

function goWriteAssemble() {
    router.push("/social/write");
}

function changeJpageNo(argPageNo) {
    router.push(`/mypage/assembleHistory?jPageNo=${argPageNo}`);
}

function changeRpageNo(argPageNo) {
    router.push(`/mypage/assembleHistory?rPageNo=${argPageNo}`);
}

function reloadApplication() {
    getJoinHistoryPage(jPageNo.value, store.state.mid);
}

watch(route, (newRoute, oldRoute) => {
    if (newRoute.query.jPageNo) {
        getJoinHistoryPage(newRoute.query.jPageNo, store.state.mid);
        jPageNo.value = newRoute.query.jPageNo;
    } else {
        getJoinHistoryPage(1, store.state.mid);
        jPageNo.value = 1;
    }

    if (newRoute.query.rPageNo) {
        getRecruitHistoryPage(newRoute.query.rPageNo, store.state.mid);
        rPageNo.value = newRoute.query.rPageNo;
    } else {
        getRecruitHistoryPage(1, store.state.mid);
        rPageNo.value = 1;
    }
});
</script>

<style scoped>
#history {
    width: 100%;
    margin: 0 auto;
}
#tabContent {
    height: 100%;
    display: flex;
    flex-direction: column;
}

.hr {
    border-bottom: 1px solid lightgray;
}
.nav-link {
    text-align: center;
    width: 100%;
    color: gray;
}

.nav-link:active {
    color: black;
    border-width: 100%;
    border-bottom: 1px solid black;
}

.active {
    color: black;
    border-width: 100%;
    border-bottom: 1px solid black;
}

.nav-link:focus {
    color: black;
    border-width: 100%;
    border-bottom: 1px solid black;
}

.nav {
    display: flex;
}

.nav-item {
    flex-basis: 50%;
}

.nav-item:nth-child(1) {
    flex-shrink: 1;
}

.nav-item:nth-child(2) {
    flex-shrink: 1;
}

.history-space {
    height: 650px;
    position: relative;
}

.history-empty {
    font-size: 14px;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

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
