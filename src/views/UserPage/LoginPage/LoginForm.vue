<template>
 
        <div class="mt-5" id="loginForm">
            <div class="mb-5 d-flex">
                <div id="email-bold"><span class="highlight">이메일</span></div>
                <div id="login-title">로 로그인하기</div>
            </div>

        <form>
            <div class="d-flex mb-2">
                <div class="input-group">
                    <input
                        type="email"
                        id="form-email"
                        class="form-control d-flex"
                        placeholder="이메일주소 입력"
                    />
                </div>
            </div>
            <div class="input-group mb-2">
                <input
                    type="password"
                    id="form-input"
                    class="form-control"
                    placeholder="비밀번호 (8자 이상)"
                />
            </div>
        </form>

            <div class="mb-3 text-end">
                혹시, <a id="findpassword-btn" href="./findPassword">비밀번호</a>를 잊으셨나요?
            </div>

            <div class="text-center">
                <button type="submit" id="sub-btn" @click="login"><strong>로그인</strong></button>
            </div>
        </div>
 
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

function login() {
    router.push("/");
}
</script>

<style scoped>
#loginForm {
    width: 50%;
    margin: 0 auto;
}

#form-email {
    margin-bottom: 5px;
    height: 50px;
    font-weight: bold;
}

#form-input {
    margin-bottom: 5px;
    width: 700px;
    height: 50px;
    font-weight: bold;
}

#email-bold {
    font-weight: bolder;
    font-size: 24px;
}

input::placeholder {
    color: #a29e9a;
    font-size: 14px;
}

#login-title {
    font-size: 24px;
}

.highlight {
    display: inline;
    box-shadow: inset 0 -10px 0 #57b17f;
}

#findpassword-btn {
    text-decoration-line: none;
    color: #558ccf;
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
