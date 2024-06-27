<template>
    <div>
        <div class="mb-4 d-flex">
            <div class="fs-4 fw-bold"><span class="highlight">비밀번호 변경</span></div>
            <div class="fs-4">하기</div>
        </div>

        <div class="input-group mb-2">
            <input
                type="password"
                id="form-input"
                class="form-control p-2"
                placeholder="비밀번호 (8자 이상)"
                v-model="password"
            />
        </div>

        <div class="input-group">
            <input
                type="password"
                id="form-input"
                class="form-control p-2"
                placeholder="비밀번호 재입력"
                v-model="passwordCheck"
            />
        </div>
        <span id="warning" style="color: red; font-size: 14px"></span>
        <div class="mt-3 text-end">
            <button class="btn" id="update-btn" @click="updatePassword">
                <strong>변경하기</strong>
            </button>
        </div>
    </div>
</template>

<script setup>
import memberAPI from "@/apis/memberAPI";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const router = useRouter();

const password = ref("");
const passwordCheck = ref("");

async function updatePassword() {
    //TODO: 유효성 검사 추가

    const member = {
        mid: store.state.mid,
        mpassword: password.value,
    };

    const response = await memberAPI.updatePassword(member);

    if (response.data.response == "success") {
        store.dispatch("deleteAuth");
        router.push("/");
    } else {
        const warning = document.getElementById("warning");
        warning.innerHTML = "같은 비밀번호로는 변경하실 수 없습니다.";
    }
}
</script>

<style scoped>
.highlight {
    display: inline;
    box-shadow: inset 0 -10px 0 #57b17f;
}

input::placeholder {
    text-align: start;
    color: #a29e9a;
    font-size: 14px;
    width: 100%;
    overflow-wrap: break-word;
}

#update-btn {
    justify-content: center;
    background-color: #558ccf;
    border: none;
    color: white;
    font-weight: bolder;
    width: 120px;
    height: 40px;
    font-size: 15px;
}
</style>
