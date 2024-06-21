<template>
    <div id="container">
        <div id="detail_content">
            <img src="../../assets/thum.jpg" />
            <div id="title">{{ social.stitle }}</div>
            <div id="address">{{ social.saddress }}</div>
            <div id="date">{{ social.swriteDate }}</div>

            <hr />
            <UserProfile :mid="social.mid"></UserProfile>
            <hr />
            <h4 id="content-title">모임 일정</h4>
            <div id="join">
                <CalendarRead :sstartDate="social.sstartDate" />
                <div id="join-right">
                    <div id="join-right-detail">
                        <div>
                            <div id="notice">
                                <span id="notice1"
                                    >방문 일정에 따라 세부 정보가 달라질수 있습니다.</span
                                >
                                <span id="notice2"
                                    >날짜에 따라 게스트님을 위한 준비가 달라질 수 있어요.</span
                                >
                                <span id="notice3"
                                    >일정을 변경한 경우 세부 정보를 다시 한번 확인해 주세요.</span
                                >
                            </div>
                            <div id="join-info">
                                <div id="join-info-txt">
                                    <span id="info-txt-time">오후 5시</span>
                                    <span class="mx-2" id="info-txt-fee">{{ Number(social.sfee).toLocaleString() }}원</span>
                                    <span id="info-txt-member">{{ social.smemberCount }}인</span>
                                </div>
                                <div>
                                    <i id="checkicon" class="bi bi-check-circle-fill"></i>
                                </div>
                            </div>
                        </div>
                        <div id="usbtn">
                            <button id="btn_us" class="btn mb-2" @click="joinSocial">
                                참여하기
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div>
                <h4 id="content-title">오시는 길</h4>
                <div id="content">
                    <h5 id="location">{{ social.saddress }}</h5>
                    <p id="subtext">*정확한 위치는 호스트의 사정에 의해 변경될 수 있습니다.</p>
                    <KakaoMap ref="kakaoMap" :saddress="social.saddress" />
                </div>
            </div>
            <hr />
            <div>
                <h4 id="content-title">어셈블 소개</h4>
                <div id="content" class="d-flex flex-column">
                    <span
                        >안녕하세요. 성남 근처에서 작은 와인집을 운영하고 있는 호스트 귀요미
                        입니다.</span
                    >
                    <img class="my-3" id="contentimg" src="../../assets/와인바.jpg" alt="" />
                    <span>모임 주제는 그리 중요하지 않습니다. 그냥 술 먹으러 오세용.</span>
                    <img class="my-3" id="contentimg" src="../../assets/와인바2.jpg" alt="" />
                    <span
                        >Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled it to
                        make a type specimen book. It has survived not only five centuries, but also
                        the leap into electronic typesetting, remaining essentially unchanged. It
                        was popularised in the 1960s with the release of Letraset sheets containing
                        Lorem Ipsum passages, and more recently with desktop publishing software
                        like Aldus PageMaker including versions of Lorem Ipsum.
                    </span>
                    <img class="mt-3" id="contentimg" src="../../assets/와인바3.jpg" alt="" />
                </div>
            </div>
            <hr />
        </div>
    </div>
</template>
<script setup>
import KakaoMap from "@/components/KakaoMap.vue";
import UserProfile from "@/components/UserProfile.vue";
import CalendarRead from "@/components/CalendarRead.vue";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const kakaoMap = ref(null);

const socialdata = ref({
    swriteDate: "2024.06.18 (화) 19:00",
    sstartDate: "2024.06.20",
    sendDate: "2024.06.20",
});

function getSocialDetail() {
    const social = ref({
        stitle: "와인, 새로운 만남!",
        scontent: "",
        swriteDate: "2024.06.18 (화) 19:00",
        sstartDate: "2024.06.20",
        sendDate: "2024.06.20",
        sfee: 50000,
        saddress: "경기 성남시 분당구 정자일로 239",
        mid: "myeonghwan57",
        smemberCount: 7,
        scolor: "red",
    });

    return social;
}

const social = getSocialDetail();

function joinSocial() {
    router.push("/social/pay?sno=1");
}
</script>

<style scoped>
#container {
    width: 70%;
    min-width: 700px;
    margin: 0 auto;
}
#detail_content {
    width: 60%;
    margin: 0 auto;
}

img {
    width: 100%;
}
#title {
    font-size: 30px;
    margin: 30px 0;
    font-weight: 600;
}
#address {
    font-weight: 800;
    color: rgba(116, 110, 110, 0.986);
}
#date {
    font-weight: 800;
    color: rgba(116, 110, 110, 0.986);
    margin-bottom: 30px;
}

#line {
    margin: 0 auto;
}
#usbtn {
    display: flex;
    width: 100%;
    bottom: 0px;
}

#btn_us {
    width: 100%;
    background-color: #558ccf;
    color: white;
    margin: 0 auto;
}
#join {
    display: flex;
    margin-top: 10px;
    width: 90%;
    height: 100%;
    margin: 0 auto;
}
#join-right {
    width: 100%;
    border: 1px rgb(230, 230, 233) solid;
    border-radius: 5px;
}
#notice {
    margin-top: 10px;
}
#notice1 {
    display: block;
    font-size: 16px;
    font-weight: 900;
}
#notice2 {
    display: block;
    font-size: 14px;
    font-weight: 900;
    color: rgb(146, 143, 143);
}
#notice3 {
    display: block;
    font-size: 14px;
    font-weight: 900;
    color: rgb(146, 143, 143);
}
#join-info {
    display: flex;
    border: 2px #57b17f solid;
    background-color: #dff7ea;
    justify-content: space-evenly;
    padding: 15px;
    margin-top: 20px;
}
#join-info-txt {
    display: flex;
}
#checkicon {
    color: #558ccf;
}
#join-right-detail {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 90%;
    height: 100%;
    margin: 0 auto;
}
#info-txt-time {
    color: rgb(0, 0, 0);
    font-weight: 900;
}
#info-txt-fee {
    color: rgb(0, 0, 0);
    font-weight: 900;
}
#info-txt-member {
    color: rgb(0, 0, 0);
    font-weight: 900;
}
#content-title {
    margin-top: 30px;
    font-weight: 900;
    font-size: 25px;
}

#location {
    margin-top: 20px;
    font-weight: 600;
    font-size: 20px;
}

#contentimg {
    width: 100%;
    height: 350px;
    object-fit: cover;
    margin-bottom: 10px;
}
#content {
    font-weight: 500;
    margin: 0 auto;
    width: 90%;
}
#subtext {
    color: #707070;
    font-weight: 600;
}
</style>
