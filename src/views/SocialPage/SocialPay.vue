<template>
    <div class="container">
        <div>
            <h1>선택한 남의 집</h1>
            <div class="mt-4">
                <div class="d-flex justify-content-between mb-4">
                    <div class="d-flex flex-column justify-content-between">
                        <h2>{{ pay.stitle }}</h2>
                        <div>
                            <div class="d-flex">
                                <p class="subtext">날짜&nbsp;&nbsp;</p>
                                <p>{{ pay.sstartDate }}</p>
                            </div>
                            <div class="d-flex">
                                <p class="subtext">장소&nbsp;&nbsp;</p>
                                <p>{{ pay.saddress }}</p>
                            </div>
                        </div>
                    </div>
                    <img src="@/assets/와인바4.jpg" width="30%" />
                </div>
            </div>
        </div>
        <hr />
        <div class="mt-4 mb-5">
            <h2>결제금액</h2>
            <div>
                <div class="d-flex justify-content-between">
                    <p class="subtext">결제금액</p>
                    <p class="paytext">{{ Number(pay.sfee).toLocaleString() }}원</p>
                </div>
                <div class="d-flex justify-content-between">
                    <p class="subtext">총 금액</p>
                    <p class="subtext">{{ Number(pay.sfee).toLocaleString() }}원</p>
                </div>
            </div>
        </div>
        <button class="btn paybtn" @click="showPayModal">결제하기</button>
        <PayModal id="#payModal" @close="hidePayModal" />
    </div>
</template>

<script setup>
import PayModal from "./PayModal.vue";
import { onMounted } from "vue";
import { Modal } from "bootstrap";
import { ref } from "vue";

let payModal = null;

onMounted(() => {
    payModal = new Modal(document.getElementById("#payModal"));
});
function showPayModal() {
    payModal.show();
}

function hidePayModal() {
    payModal.hide();
}

function getSocialPay() {
    const pay = ref({
        stitle: "와인, 새로운 만남!",
        sfee: 50000,
        sstartDate: "2024.06.20",
        saddress: "경기 성남시 분당구 정자일로 239",
    });

    return pay;
}
const pay = getSocialPay();
</script>

<style scoped>
.container {
    width: 70%;
}

p {
    margin: auto 0;
}

hr {
    color: #707070;
}

h1 {
    font-size: 26px;
    font-weight: 700;
}

h2 {
    font-size: 22px;
    font-weight: 600;
}

.container {
    width: 50%;
    min-width: 700px;
    margin: 0 auto;
    padding-top: 5%;
}

.subtext {
    color: #707070;
}

.paytext {
    color: #558ccf;
    font-size: 22px;
}

.paybtn {
    width: 100%;
    padding: 0 45%;
    height: 60px;
    color: #fff;
    background-color: #558ccf;
    font-weight: 700;
    font-size: 18px;
    line-height: 90%;
    margin-top: 20px;
}
</style>
