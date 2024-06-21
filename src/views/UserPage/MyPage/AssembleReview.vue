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
                    <button class="nav-link fw-bold" @click="toMeClick" :class="{ active: toMe }">
                        나에게 작성된 후기
                    </button>
                </div>
                <div class="nav-item">
                    <button
                        class="nav-link fw-bold"
                        @click="fromMeClick"
                        :class="{ active: fromMe }"
                    >
                        내가 작성한 후기
                    </button>
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
                    <div v-if="toMe">
                        <Review
                            v-for="(toMeReview, index) in toMeReviews"
                            :key="index"
                            :review="toMeReview"
                        />
                    </div>
                    <div v-if="fromMe">
                        <Review
                            v-for="(fromMeReview, index) in fromMeReviews"
                            :key="index"
                            :review="fromMeReview"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Review from "@/components/Review.vue";
import { ref } from "vue";
const toMe = ref(true);
const fromMe = ref(false);

const toMeClick = () => {
    toMe.value = true;
    fromMe.value = false;
};

const fromMeClick = () => {
    fromMe.value = true;
    toMe.value = false;
};

function getToMeReviews() {
    const toMeReviews = ref([
        {
            stitle: "현대식 분재 그리고 와인1",
            mname: "귀요미",
            sddate: "24.06.21",
            rcontent:
                "호스트님이 어색하지 않게 잘 리드해주시는 점이 좋았습니다! 처음 이런거 참여해봤는데 신선하고 재미있는 경험이였습니다. 호스트님이 어색하지 않게 잘 리드해주시는 점이 좋았습니다! 처음 이런거 참여해봤는데 신선하고 재미있는 경험이였습니다. ",
        },
        {
            stitle: "현대식 분재 그리고 와인1",
            mname: "귀요미",
            sddate: "24.06.21",
            rcontent:
                "호스트님이 어색하지 않게 잘 리드해주시는 점이 좋았습니다! 처음 이런거 참여해봤는데 신선하고 재미있는 경험이였습니다. ",
        },
    ]);
    return toMeReviews;
}
const toMeReviews = getToMeReviews();

function getFromMeReviews() {
    const fromMeReviews = ref([
        {
            stitle: "현대식 분재 그리고 와인2",
            mname: "호스트",
            sddate: "24.06.21",
            rcontent: "너무 즐거웠어요~",
        },
    ]);
    return fromMeReviews;
}
const fromMeReviews = getFromMeReviews();
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

.nav {
    display: flex;
}
</style>
