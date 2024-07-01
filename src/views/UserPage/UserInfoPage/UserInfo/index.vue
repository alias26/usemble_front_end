<template>
    <div class="content p-2">
        <div class="card">
            <div class="card-body">
                <div class="d-flex justify-content-between">
                    <div class="d-flex">
                        <div class="profile-img me-3">
                            <img :src="mattach" width="100px" height="100px" />
                        </div>
                        <div class="profile">
                            <p class="subtext mt-2 mb-2" style="font-size: 16px">사용자</p>
                            <h4>{{ member.mname }}</h4>
                            <p class="subtext mt-2 mb-2">
                                {{ new Date(member.mdate).toLocaleDateString() }} 가입
                            </p>
                        </div>
                    </div>
                    <div class="mt-1">
                        <button
                            id="like"
                            class="like bi fs-4"
                            :class="{
                                'bi-heart': !like,
                                'like-deactive': !like,
                                'bi-heart-fill': like,
                                'like-active': like,
                            }"
                            @click="handleLike($store.state.mid, mid)"
                        ></button>
                    </div>
                </div>
                <hr />
                <div class="d-flex">
                    <div class="dashboard">
                        <p class="theme-color-text">좋아요를 받은 사용자의 수</p>
                        <h5>{{ member.likeCnt }}개</h5>
                    </div>
                    <div class="vr"></div>
                    <div class="dashboard">
                        <p class="theme-color-text">주최한 어셈블의 수</p>
                        <h5>{{ member.socialCnt }}개</h5>
                    </div>
                    <div class="vr"></div>
                    <div class="dashboard">
                        <p class="theme-color-text">함께한 분들의 후기</p>
                        <h5>{{ member.reviewCnt }}개</h5>
                    </div>
                </div>
                <hr />
                <div class="mt-5 mb-5">
                    <p class="profile-introduce">{{ member.mintroduce }}</p>
                </div>
            </div>
        </div>
        <UserSocialList
            :title="member.mname + '님이 진행 중인 어셈블'"
            link="/user/inprogress"
            :socials="inProgressedeSocials"
        />
        <UserSocialList
            :title="member.mname + '님이 진행한 어셈블'"
            link="/user/progressed"
            :socials="progressedeSocials"
        />
        <div class="card mt-4">
            <div class="card-body">
                <div class="d-flex justify-content-between">
                    <h5>함께한 분들의 후기 {{ member.reviewCnt }}</h5>
                    <RouterLink class="show-more" to="/">더보기</RouterLink>
                </div>
                <Review v-for="(review, index) in reviews" :key="index" :review="review" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import memberAPI from "@/apis/memberAPI";
import Review from "@/components/Review.vue";
import UserSocialList from "./UserSocialList.vue";

//멤버 정보
const member = ref({
    mid: "",
    mname: "",
    mintroduce: "",
    mdate: "",
    likeCnt: 0,
    socialCnt: 0,
    reviewCnt: 0,
});

const route = useRoute();
const store = useStore();
const mid = route.query.mid;

const mattach = ref(null);

//유저 프로필 이미지 가져오기
async function getAttach(mid) {
    try {
        const response = await memberAPI.memberAttachDownload(mid);
        const blob = response.data;
        mattach.value = URL.createObjectURL(blob);
    } catch (error) {
        console.log(error);
    }
}

getAttach(mid);

//유저 프로필 가져오기
async function getMember(mid) {
    try {
        const response = await memberAPI.getUserProfile(mid);
        member.value.mid = response.data.member.mid;
        member.value.mname = response.data.member.mname;
        member.value.mintroduce = response.data.member.mintroduce;
        member.value.mdate = response.data.member.mdate;
    } catch (error) {
        console.log(error);
    }
}

getMember(mid);

//나의 좋아요 상태
const like = ref(false);

//나의 좋아요 상태 가져오기
async function getLikeState(mid, fmid) {
    try {
        const response = await memberAPI.getLikeState(mid, fmid);
        like.value = response.data;
    } catch (error) {
        console.log(error);
    }
}

getLikeState(store.state.mid, mid);

//좋아요
async function handleLike(mid, fmid) {
    //스스로를 좋아요 시도 시
    if (mid === fmid) {
        alert("스스로를 좋아요할 수 없습니다.");
        return;
    }
    like.value = !like.value;

    //좋아요 했을 시
    if (like.value) {
        const response = await memberAPI.insertLike(mid, fmid);
    } else {
        const response = await memberAPI.deleteLike(mid, fmid);
    }
}

//대쉬보드 정보
//좋아요 수 가져오기
async function getLikeCnt(mid) {
    try {
        const response = await memberAPI.getLikeCnt(mid);
        member.value.likeCnt = response.data;
    } catch (error) {
        console.log(error);
    }
}

getLikeCnt(mid);

//소셜 작성 수 가져오기
async function getSocialCnt(mid) {
    try {
        const response = await memberAPI.getSocialCnt(mid);
        member.value.socialCnt = response.data;
    } catch (error) {
        console.log(error);
    }
}

getSocialCnt(mid);

//리뷰 작성 수 가져오기
async function getReviewCnt(mid) {
    try {
        const response = await memberAPI.getReviewCnt(mid);
        member.value.reviewCnt = response.data;
    } catch (error) {
        console.log(error);
    }
}

getReviewCnt(mid);

function getInProgressSocials() {
    const socials = ref([
        {
            stitle: "어셈블 이름1",
            saddress: "주소1",
            sfee: "50000",
        },
        {
            stitle: "어셈블 이름2",
            saddress: "주소2",
            sfee: "50000",
        },
        {
            stitle: "어셈블 이름3",
            saddress: "주소3",
            sfee: "50000",
        },
    ]);

    return socials;
}

const inProgressedeSocials = getInProgressSocials(member.value.mid);

function getProgressedSocials() {
    const socials = ref([
        {
            stitle: "어셈블 이름1",
            saddress: "주소1",
            sfee: "50000",
        },
        {
            stitle: "어셈블 이름2",
            saddress: "주소2",
            sfee: "50000",
        },
        {
            stitle: "어셈블 이름3",
            saddress: "주소3",
            sfee: "50000",
        },
    ]);

    return socials;
}

const progressedeSocials = getProgressedSocials(member.value.mid);

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

.like-active {
    color: red;
}

.like-deactive {
    color: black;
}

.profile-introduce {
    font-weight: 600;
    font-size: 14px;
    color: #858585;
}

.show-more {
    color: #858585;
    /* text-decoration: none; */
    margin: auto 0px;
}
</style>
