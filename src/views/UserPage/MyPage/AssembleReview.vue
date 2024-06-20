<template>
    <div class="d-flex">
        <div id="history">
            <div class="mb-5 text-center fw-bold fs-5">
                <i class="bi bi-chat-dots me-1" style="font-size: 45px"></i>
                <p>후기</p>
            </div>
            <div class="hr"></div>
            <div class="nav justify-content-around">
                <div class="nav-item">
                    <RouterLink
                        class="nav-link fw-bold"
                        aria-current="page"
                        to="./ApplicationDetail"
                        >나에게 작성된 후기</RouterLink
                    >
                </div>
                <div class="nav-item">
                    <RouterLink class="nav-link fw-bold" aria-current="page" to="RecruitmentDetail"
                        >내가 작성한 후기</RouterLink
                    >
                </div>
            </div>
            <div class="bg-light text-center" style="height: 500px">
                <div class="hr"></div>
                <div id="txt" class="text-secondary text-start" style="font-size: 14px">
                    <!-- 
                    <div>아직 나에게 작성된 후기가 없으시네요!</div>
                    <div class="mb-4">어셈블 하고 후기를 받아보세요.</div>

                    <div>작성한 후기가 없으시네요!</div>
                    <div class="mb-4">어셈블에 놀러 다녀오신 후, 후기를 남겨보세요.</div>

                    <button
                        class="p-3 bg-black text-white rounded-1 fw-bold"
                        style="font-size: 14px; border: none"
                    >
                        어셈블 둘러보기
                    </button> -->
                    <!-- <ApplicationDetail /> -->
                    <RecruitmentDedatil
                        v-for="(recruitment, index) in recruitments"
                        :key="index"
                        :recruitment="recruitment"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import ApplicationDetail from "./ApplicationDetail.vue";
import RecruitmentDedatil from "./RecruitmentDetail.vue";
import { ref } from "vue";

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
#txt {
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

.nav-link:focus {
    color: black;
    border-width: 100%;
    border-bottom: 3px solid black;
}

.nav {
    display: flex;
}
</style>
