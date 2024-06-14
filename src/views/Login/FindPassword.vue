<template>
    <div class="mt-5" id="findPassword">
        <div class="mb-5 d-flex">
            <div id="title-bold"><span class="highlight">비밀번호</span></div>
            <div id="find-title">&nbsp;찾기</div>
        </div>

        <form>
            <div class="d-flex mb-2">
                <div class="input-group me-2">
                    <input
                        type="email"
                        id="form-email"
                        class="form-control d-flex"
                        placeholder="이메일주소 입력"
                    />
                </div>
            </div>
        </form>

        <div class="text-center">
            <button type="submit" id="sub-btn" @click="trasfer"><strong>전송하기</strong></button>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
function trasfer() {
    router.push("/");
}
</script>

<style scoped>
#findPassword {
    width: 70%;
    margin: 0 auto;
}

.highlight {
    display: inline;
    box-shadow: inset 0 -10px 0 #57b17f;
}

#title-bold {
    font-weight: bolder;
    font-size: 24px;
}

#find-title {
    font-size: 24px;
}

#form-email {
    margin-bottom: 5px;
    height: 50px;
    font-weight: bold;
}

input::placeholder {
    color: #a29e9a;
    font-size: 14px;
}

#sub-btn {
    text-align: center;
    margin-top: 100px;
    width: 450px;
    height: 45px;
    background-color: #558ccf;
    border: none;
    color: white;
    font-size: 15px;
    border-radius: 7px 7px;
}
</style>
