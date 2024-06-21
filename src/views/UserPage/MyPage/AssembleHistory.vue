<template>
    <div class="d-flex">
        <div id="history">
            <div class="mb-5 text-center fw-bold fs-5">
                <i class="bi bi-house-door me-1" style="font-size: 45px"></i>
                <p>어셈블 내역</p>
            </div>
            <div class="hr"></div>
            <div class="nav justify-content-around">
                <div class="fw-bold">
                    <button
                        class="nav-link"
                        @click="applyClick"
                        :class="{ active: apply }"
                    >
                        신청 내역
                    </button>
                </div>
                <div class="fw-bold">
                    <button class="nav-link" @click="recruitClick" :class="{ active: recruit }">
                        모집 내역
                    </button>
                </div>
            </div>
            <div class="bg-light text-center" style="height: 500px">
                <div class="hr"></div>
                <div id="tabContent" class="text-secondary text-start" style="font-size: 14px">
                    <!-- <div>아직 신청한 어셈블이 없으시네요!</div>
                    <div class="mb-4">지금 바로 어셈블에 놀러가 보세요.</div>
                    <button
                        class="p-3 bg-black text-white rounded-1 fw-bold"
                        style="font-size: 14px; border: none"
                    >
                        어셈블 둘러보기
                    </button> -->
                    <div v-if="apply">
                        <ApplicationDetail
                            v-for="(application, index) in applications"
                            :key="index"
                            :application="application"
                        />
                    </div>
                    <div v-if="recruit">
                        <RecruitmentDedatil
                            v-for="(recruitment, index) in recruitments"
                            :key="index"
                            :recruitment="recruitment"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import ApplicationDetail from "./ApplicationDetail.vue";
import RecruitmentDedatil from "./RecruitmentDetail.vue";
import { ref } from "vue";
// 신청 내역이 활성화 되어 있는 상태
const apply = ref(true);
const recruit = ref(false);

const applyClick = () => {
    apply.value = true;
    recruit.value = false;
};

const recruitClick = () => {
    apply.value = false;
    recruit.value = true;
};

function getApplications() {
    const applications = ref([
        {
            stitle: "현대식 분재 그리고 와인1",
            saddress: "서울특별시 노원구 공릉로26길 26",
            sfee: "24000",
        },
        {
            stitle: "현대식 분재 그리고 와인2",
            saddress: "서울특별시 노원구 공릉로26길 26",
            sfee: "24000",
        },
    ]);

    return applications;
}

const applications = getApplications();

function getRecruitments() {
    const recruitments = ref([
        {
            stitle: "현대식 분재 그리고 와인1",
            saddress: "서울특별시 노원구 공릉로26길 26",
            sfee: "24000",
        },
    ]);

    return recruitments;
}

const recruitments = getRecruitments();
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
    width: 465px;
    color: gray;
}

.nav-link:active {
    color: black;
    border-width: 100%;
    border-bottom: 3px solid black;
}

.active {
    color: black;
    border-width: 100%;
    border-bottom: 3px solid black;
}

.nav-link:focus {
    color: black;
    border-width: 100%;
    border-bottom: 3px solid black;
}

.nav .nav {
    display: flex;
}
</style>
