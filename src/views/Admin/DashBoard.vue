<template>
    <div class="mb-5" id="dash">
        <div class="d-flex justify-content-center mt-5">
            <div id="box">
                <div class="d-flex" id="member_left">
                    <span id="membertxt">회원</span>
                </div>
                <div id="box_content" class="d-flex justify-content-evenly">
                    <div class="d-flex flex-column" style="text-align: center">
                        <i id="all" class="bi bi-people-fill"></i>
                        <span id="membercnt">{{ all }} 명</span>
                    </div>
                    <div class="d-flex flex-column" style="text-align: center">
                        <i id="male" class="bi bi-person-standing"></i>
                        <span id="membercnt">{{ male }} 명</span>
                    </div>
                    <div class="d-flex flex-column" style="text-align: center">
                        <i id="female" class="bi bi-person-standing-dress"></i>
                        <span id="membercnt">{{ female }} 명</span>
                    </div>
                </div>
            </div>
            <div id="box">
                <div class="d-flex" id="social_left">
                    <span id="socialtxt">소셜링</span>
                </div>
                <div id="box_content">
                    <div class="d-flex">
                        <div id="bar_grp" class="d-flex flex-column ms-4">
                            <div
                                id="bar_content"
                                v-for="(ct, index) in cts"
                                :key="index"
                                class="d-flex flex-column my-1"
                            >
                                <span id="title">{{ ct.ctname }} </span>
                            </div>
                        </div>
                        <div
                            class="ms-2 d-flex flex-column justify-content-between"
                            style="width: 80%"
                        >
                            <div class="d-flex flex-column" v-for="(ct, index) in cts" :key="index">
                                <div class="progress-bar">
                                    <div class="progress" :style="{ width: per[index] + '%' }">
                                        <span class="ms-2" style="font-size: 16px; color: white"
                                            >{{ cate[index] }} 개</span
                                        >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="d-flex justify-content-center mt-5">
            <div id="box">
                <div class="d-flex">
                    <span id="socialtxt">리뷰</span>
                </div>
                <table class="table table-bordered text-center">
                    <tr style="height: 50px">
                        <th style="width: 40px">번호</th>
                        <th style="width: 100px">내용</th>
                        <th style="width: 40px">날짜</th>
                        <th style="width: 40px">작성자</th>
                    </tr>
                    <tr style="height: 35px" v-for="(review, index) in reviews" :key="index">
                        <td>{{ index + 1 }}</td>
                        <td>{{ review.rcontent }}</td>
                        <td>{{ review.rdate }}</td>
                        <td>{{ review.mid }}</td>
                    </tr>
                </table>
            </div>
            <div id="box">
                <div class="d-flex">
                    <span id="socialtxt">공지사항</span>
                </div>
                <div>
                    <table class="table table-bordered text-center">
                        <tr style="height: 50px">
                            <th style="width: 40px">번호</th>
                            <th style="width: 120px">제목</th>
                            <th style="width: 50px">날짜</th>
                            <th style="width: 40px">작성자</th>
                        </tr>
                        <tr style="height: 35px" v-for="notice in notices" :key="notice.nno">
                            <td>{{ notice.nno }}</td>
                            <td>{{ notice.ntitle }}</td>
                            <td>{{ formatDate(notice.ndate) }}</td>
                            <td>{{ notice.mid }}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import adminAPI from "@/apis/adminAPI";
import { ref } from "vue";
const all = ref(0);
const male = ref(0);
const female = ref(0);
const member = ref([]);
const social = ref([]);
const cate = ref([0, 0, 0, 0, 0]);
const per = ref([0, 0, 0, 0, 0]);
const cts = ref([]);
const notices = ref([]);
const reviews = ref([]);
async function getMemberAll() {
    const response = await adminAPI.getMemberAll();
    member.value = response.data;

    // 성별을 기준으로 멤버를 분류
    all.value = member.value.length;
    male.value = member.value.filter((person) => person.msex === "남").length;
    female.value = member.value.filter((person) => person.msex === "여").length;
}
async function getSocialAll() {
    const response = await adminAPI.getSocialAll();

    social.value = response.data;
    cate.value[0] = social.value.filter((social) => social.ctno == 1).length;
    cate.value[1] = social.value.filter((social) => social.ctno == 2).length;
    cate.value[2] = social.value.filter((social) => social.ctno == 3).length;
    cate.value[3] = social.value.filter((social) => social.ctno == 4).length;
    cate.value[4] = social.value.filter((social) => social.ctno == 5).length;

    getPer();
}
function getPer() {
    for (let i = 0; i < 5; i++) {
        per.value[i] = (cate.value[i] / social.value.length) * 100;
    }
}
async function getCategoryName() {
    const response = await adminAPI.getCategoryName();
    cts.value = response.data;
}

async function getNotice() {
    const response = await adminAPI.getNotices();
    notices.value = response.data;
}
async function getReview() {
    const response = await adminAPI.getReview();
    reviews.value = response.data;
    console.log(reviews.value);
}

getMemberAll();
getSocialAll();
getCategoryName();
getNotice();
function formatDate(dateString) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("ko-KR", options).format(date);
}
getReview();
</script>
<style scoped>
#dash {
    display: flex;
    flex-direction: column;
}
#box {
    width: 50%;
    border-radius: 10px;
    height: 250px;
    margin-right: 20px;
    border: solid;
}
#box_content {
}
#membertxt {
    color: #558ccf;
    font-size: 35px;
    font-weight: 900;
    margin-left: 10px;
}
#membercnt {
    color: black;
    font-size: 20px;
    font-weight: 900;
    margin-left: 10px;
}

#bar_grp {
    display: flex;
}
#bar_content {
}
#circle_grp {
    width: 50%;
    display: flex;
}
#pie {
    display: inline-block;
    width: 180px;
    height: 180px;
    margin: 0 auto;
    background: conic-gradient(#4f98ff 0% 65%, #5ace8e 65% 100%);
    border-radius: 50%;
}
#pie2 {
    display: inline-block;
    width: 180px;
    height: 180px;
    margin: 0 auto;
    background: conic-gradient(
        #6f4fff 0% 10%,
        #4f98ff 10% 50%,
        #e76fff 50% 80%,
        #5ace8e 80% 95%,
        #e5ff72 95% 100%
    );
    border-radius: 50%;
}
#socialtxt {
    color: #558ccf;
    font-size: 35px;
    font-weight: 900;
    margin-left: 10px;
}
#socialcnt {
    color: black;
    font-size: 20px;
    font-weight: 900;
    margin-left: 10px;
}
.progress-bar {
    width: 100%;
    height: 27px;
    background-color: #eeeeee;
    border-radius: 4px;
    font-weight: 600;
    font-size: 0.8rem;
    margin: auto 0;
    margin-left: 5px;
}
.progress-bar .progress {
    width: 100%;
    height: 27px;
    padding: 0;
    text-align: center;
    background-color: #4f98ff;
    border-radius: 4px;
    color: #111;
}

#title {
    font-weight: 700;
    font-size: 19px;
}
#content {
    font-weight: 500;
}
#m_color {
    color: #4f98ff;
}
#w_color {
    color: #5ace8e;
}
#circle_title {
    font-size: 14px;
}
#table_title {
    text-decoration: none;
}
#all {
    font-size: 90px;
}
#male {
    font-size: 90px;
    color: #558ccf;
}
#female {
    font-size: 90px;
    color: #5ace8e;
}
</style>
