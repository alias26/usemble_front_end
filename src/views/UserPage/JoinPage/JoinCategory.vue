<template>
    <div class="mt-5" id="joinForm">
        <div class="d-flex my-2" id="join-step">
            <div style="color: #cecac8">
                <h6><strong>1. 이메일 입력&nbsp; > &nbsp;</strong></h6>
            </div>
            <div>
                <h6><strong>2. 카테고리 선택</strong></h6>
            </div>
        </div>
        <div class="mt-4 mb-5">
            <h2>회원가입 마지막 단계!</h2>
            <h2>관심있는 카테고리를 선택하세요</h2>
            <p style="color: gray">취향에 맞게 추천해드려요.</p>
        </div>

        <div class="mb-2">
            <button type="button" class="btn btn-outline-secondary me-2" id="ct-btn">
                인간관계(친목)
            </button>
            <button type="button" class="btn btn-outline-secondary me-2" id="ct-btn">여행</button>
            <button type="button" class="btn btn-outline-secondary me-2" id="ct-btn">
                스포츠/운동
            </button>
            <button type="button" class="btn btn-outline-secondary me-2" id="ct-btn">
                자기계발/공부
            </button>
            <button type="button" class="btn btn-outline-secondary" id="ct-btn">음식</button>
        </div>

        <div class="mb-5" id="ct-select">*최대 3개(0/3)</div>

        <div class="mt-5 mb-5">
            <div class="form-check mb-4">
                <input
                    class="form-check-input"
                    type="checkbox"
                    id="agreeAll"
                    name="agreeAll"
                    value="1"
                />
                <label class="form-check-label mt-1" for="agreeAll"> 전체 동의하기 </label>
            </div>
            <hr style="color: gray" />
            <div class="form-check mb-4">
                <input
                    class="form-check-input"
                    type="checkbox"
                    id="agree1"
                    name="agree1"
                    value="1"
                />
                <label class="form-check-label mt-1" for="agree1"> 이용약관 동의 (필수) </label>
            </div>
            <div class="form-check mb-4">
                <input
                    class="form-check-input"
                    type="checkbox"
                    id="agree2"
                    name="agree2"
                    value="1"
                />
                <label class="form-check-label mt-1" for="agree2">
                    개인정보처리방침 동의 (필수)
                </label>
            </div>
            <div class="form-check mb-4">
                <input
                    class="form-check-input"
                    type="checkbox"
                    id="agree3"
                    name="agree3"
                    value="1"
                />
                <label class="form-check-label mt-1" for="agree3">
                    마케팅 정보 수신 동의 (선택)
                </label>
            </div>
        </div>
        <div class="text-center">
            <button id="join-btn" @click="showJoinModal">
                <strong>가입하기</strong>
            </button>
            <JoinModal id="joinModal" @close="hideJoinModal" />
        </div>
    </div>
</template>

<script setup>
import JoinModal from "./JoinModal.vue";
import { onMounted } from "vue";
import { Modal } from "bootstrap";

let joinModal = null;

onMounted(() => {
    joinModal = new Modal(document.querySelector("#joinModal"));
});
function showJoinModal() {
    joinModal.show();
}

function hideJoinModal() {
    joinModal.hide();
}
</script>

<style scoped>
#joinForm {
    width: 70%;
    margin: 0 auto;
    text-align: left;
}
#test {
    width: 70%;
    margin: 0 auto;
}
h2 {
    font-weight: bolder;
    text-align: left;
}

#ct-btn {
    border-color: #cecac8;
    padding: 12px 25px;
    border-radius: 50px;
    opacity: 70%;
    font-size: 14px;
    font-weight: bolder;
}

#ct-btn:hover {
    color: white;
    border: #57b17f;
    background-color: #57b17f;
    padding: 12px 25px;
    border-radius: 50px;
    opacity: 70%;
    font-size: 14px;
    font-weight: bolder;
}

#ct-btn:focus {
    color: white;
    border: #57b17f;
    background-color: #57b17f;
    padding: 12px 25px;
    border-radius: 50px;
    opacity: 70%;
    font-size: 14px;
    font-weight: bolder;
}

#ct-select {
    color: gray;
    font-size: 13px;
}

.form-check {
    font-weight: bolder;
}

input[type="checkbox"] {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    margin-right: 8px;
    border: solid 0.3px #cecac8;
}

input[type="checkbox"]:checked {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    margin-right: 8px;
    border: solid 0.3px #558ccf;
    background-color: #558ccf;
}

#join-btn {
    margin-top: 40px;
    width: 450px;
    height: 45px;
    background-color: #558ccf;
    border: none;
    color: white;
    font-size: 15px;
    border-radius: 7px 7px;
}
</style>
