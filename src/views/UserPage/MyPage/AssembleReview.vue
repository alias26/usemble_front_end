<template>
    <div class="d-flex">
        <div id="history">
            <div class="mb-5 text-center fw-bold fs-5">
                <i class="bi bi-chat-dots me-1" style="font-size: 45px"></i>
                <p>후기</p>
            </div>
            <div class="hr"></div>
            <div class="nav">
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
                            v-for="(toMeReview, index) in recieveReviewPage.reviewList"
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
import reviewAPI from "@/apis/reviewAPI";
import Review from "@/components/Review.vue";
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
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

const recieveReviewPage = ref({
    pager: {},
    reviewList: [],
});

async function getRecieveReviewList(mid) {
    try {
        const response = await reviewAPI.getRecieveReviewList(mid);
        recieveReviewPage.value.pager = response.data.pager;
        recieveReviewPage.value.reviewList = response.data.reviewList;
    } catch (error) {
        console.log(error);
    }
}

getRecieveReviewList(store.state.mid);

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
    width: 100%;
    color: gray;
}

.nav-link:focus {
    color: black;
    border-width: 100%;
    border-bottom: 1px solid black;
}

.active {
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
</style>
