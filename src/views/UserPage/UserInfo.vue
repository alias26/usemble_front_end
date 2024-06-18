<template>
    <div class="content p-2">
        <div class="card">
            <div class="card-body">
                <div class="d-flex justify-content-between">
                    <div class="d-flex">
                        <div class="profile-img me-3">
                            <img src="../../assets/logo.png" width="100px" height="100px" />
                        </div>
                        <div class="profile">
                            <p class="subtext mt-2 mb-2" style="font-size: 16px">사용자</p>
                            <h4>{{ member.mname }}</h4>
                            <p class="subtext mt-2 mb-2">{{ member.mdate }} 가입</p>
                        </div>
                    </div>
                    <div class="mt-1">
                        <button
                            id="like"
                            class="like bi bi-heart fs-4"
                            @click="handleLike"
                        ></button>
                    </div>
                </div>
                <hr />
                <div class="d-flex">
                    <div class="dashboard">
                        <p class="theme-color-text">좋아요를 받은 사용자의 수</p>
                        <h5>{{ likeCnt }}개</h5>
                    </div>
                    <div class="vr"></div>
                    <div class="dashboard">
                        <p class="theme-color-text">주최한 어셈블의 수</p>
                        <h5>{{ usembleCnt }}개</h5>
                    </div>
                    <div class="vr"></div>
                    <div class="dashboard">
                        <p class="theme-color-text">함께한 분들의 후기</p>
                        <h5>{{ reviewCnt }}개</h5>
                    </div>
                </div>
                <hr />
                <div class="mt-5 mb-5">
                    <p class="profile-introduce">{{ member.mintroduce }}</p>
                </div>
            </div>
        </div>
        <div class="card mt-4">
            <div class="card-body">
                <div class="d-flex justify-content-between">
                    <h5>사용자이름님이 진행 중인 어셈블</h5>
                    <RouterLink class="show-more" to="/">더보기</RouterLink>
                </div>
                <div class="row mt-3">
                    <SocialCard v-for="index in 2" :key="index" class="col-4" />
                </div>
            </div>
        </div>
        <div class="card mt-4">
            <div class="card-body">
                <div class="d-flex justify-content-between">
                    <h5>사용자이름님이 진행한 어셈블</h5>
                    <RouterLink class="show-more" to="/">더보기</RouterLink>
                </div>
                <div class="row mt-3">
                    <SocialCard v-for="index in 3" :key="index" class="col-4" />
                </div>
            </div>
        </div>
        <div class="card mt-4">
            <div class="card-body">
                <div class="d-flex justify-content-between">
                    <h5>함께한 분들의 후기 {{ reviewCnt }}</h5>
                    <RouterLink class="show-more" to="/">더보기</RouterLink>
                </div>
                <Review v-for="(review, index) in reviews" :key="index" :review="review" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import Review from "@/components/Review.vue";
import SocialCard from "@/components/Social/SocialCard.vue";

//멤버 정보
const member = {
    mname: "사용자이름",
    mdate: "2023.01.03",
    mintroduce: "자기소개입니다.",
};

//나의 좋아요 상태
const like = ref(false);

//대쉬보드 정보
const likeCnt = ref(150);
const usembleCnt = ref(10);
const reviewCnt = ref(3);

const review1 = {
    stitle: "어셈블 제목1",
    mname: "이름",
    rcontent: "진짜 너무 재미있는 시간이였습니다!",
    sddate: "2023.4.29",
};

const review2 = {
    stitle: "어셈블 제목2",
    mname: "이름",
    rcontent: "진짜 너무 재미있는 시간이였습니다!",
    sddate: "2023.4.29",
};

const review3 = {
    stitle: "어셈블 제목3",
    mname: "이름",
    rcontent: "진짜 너무 재미있는 시간이였습니다!",
    sddate: "2023.4.29",
};

const reviews = [review1, review2, review3];

function handleLike() {
    like.value = !like.value;
    const likeEl = document.getElementById("like");

    if (like.value) {
        likeEl.classList.remove("bi-heart");
        likeEl.style.color = "red";
        likeEl.classList.add("bi-heart-fill");
    } else {
        likeEl.classList.remove("bi-heart-fill");
        likeEl.style.color = "black";
        likeEl.classList.add("bi-heart");
    }
}
</script>

<style scoped>
.subtext {
    color: #707070;
    font-weight: 700;
    font-size: 14px;
}

.theme-color-text {
    color: black;
    font-weight: 700;
    font-size: 14px;
}

h4,
h5 {
    font-weight: 700;
}

h5 {
    font-size: 18px;
    margin: 14px 0px;
}

.content {
    background-color: #efefef;
}

.card {
    width: 60%;
    margin: 30px auto;
}

.profile {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.profile-img {
    width: 100px;
    height: 100px;
    overflow: hidden;
    border-radius: 50px 50px;
}

.dashboard {
    text-align: center;
    margin: 0 auto;
    width: 33.3%;
}

.like {
    border: 0;
    background-color: #fff;
    border-radius: 10px;
}

.show-more {
    color: #858585;
    /* text-decoration: none; */
    margin: auto 0px;
}

.profile-introduce {
    font-weight: 600;
    font-size: 14px;
    color: #858585;
}
</style>
