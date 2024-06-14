<template>
    <div class="my-5" id="joinForm">
        <div class="d-flex mb-2" id="join-step">
            <div>
                <h6><strong>1. 회원정보 입력</strong></h6>
            </div>
            <div style="color: #cecac8">
                <h6><strong>&nbsp; > &nbsp;2. 카테고리 선택</strong></h6>
            </div>
        </div>

        <div class="mb-5 d-flex">
            <div id="email-bold"><span class="highlight">회원가입</span></div>
            <div id="step1-title">하기</div>
        </div>

        <form>
            <div class="mb-3 fs-6"><strong>아이디/비밀번호</strong></div>
            <div class="d-flex mb-2">
                <div class="input-group me-2">
                    <input
                        type="email"
                        id="form-email"
                        class="form-control d-flex"
                        placeholder="이메일주소 입력"
                    />
                </div>
                <button type="button" class="btn btn-secondary" id="check-btn">중복 확인</button>
            </div>

            <div class="input-group mb-2">
                <input
                    type="password"
                    id="form-input"
                    class="form-control"
                    placeholder="비밀번호 (8자 이상)"
                />
            </div>

            <div class="input-group">
                <input
                    type="password"
                    id="form-input"
                    class="form-control"
                    placeholder="비밀번호 재입력"
                />
            </div>

            <div class="mt-4 mb-3 fs-6"><strong>이름</strong></div>
            <div class="input-group mb-2">
                <input type="text" id="form-input" class="form-control" placeholder="이름" />
            </div>

            <div class="mt-4 mb-3 fs-6"><strong>주민번호</strong></div>
            <div class="input-group d-flex mb-4">
                <div>
                    <span
                        ><input
                            type="text"
                            id="form-ssn1"
                            class="form-control fw-bold"
                            placeholder="주민번호 앞자리"
                    /></span>
                </div>
                &nbsp;-&nbsp;
                <div class="d-flex">
                    <div>
                        <input
                            type="text"
                            id="form-ssn2"
                            class="form-control me-1"
                            style="width: 35px"
                        />
                    </div>
                    <div>******</div>
                </div>
            </div>

            <div class="mt-4 mb-3 fs-6"><strong>휴대전화</strong></div>
            <div class="input-group">
                <div class="d-flex">
                    <div class="me-2">
                        <span>
                            <input
                                type="text"
                                class="form-control fw-bold"
                                id="form-mphone"
                                placeholder="010"
                                name="form-mphone"
                            />
                        </span>
                    </div>
                    <div class="me-2">
                        <span
                            ><input
                                type="text"
                                class="form-control"
                                id="form-mphone"
                                name="form-mphone"
                        /></span>
                    </div>
                    <div class="mb-5">
                        <span
                            ><input
                                type="text"
                                class="form-control"
                                id="form-mphone"
                                name="form-mphone"
                        /></span>
                    </div>
                </div>
            </div>
            <hr />
            <div class="mt-5 mb-3 fs-6"><strong>계좌정보</strong></div>
            <div class="d-flex">
                <div class="me-2">
                    <input
                        type="text"
                        class="form-control"
                        id="form-account"
                        name="form-account1"
                        placeholder="은행명"
                    />
                </div>
                <div class="w-25">
                    <input
                        type="text"
                        class="form-control"
                        id="form-account"
                        name="form-account2"
                        placeholder="계좌번호"
                    />
                </div>
            </div>
        </form>
        <div class="text-center">
            <button type="submit" id="sub-btn" @click="nextStep"><strong>다음</strong></button>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

function nextStep() {
    router.push("./joinStep2");
}
</script>

<style scoped>
#joinForm {
    width: 70%;
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

#step1-title {
    font-size: 24px;
}

.highlight {
    display: inline;
    box-shadow: inset 0 -10px 0 #57b17f;
}

input::placeholder {
    color: #a29e9a;
    font-size: 14px;
}

#check-btn {
    background-color: #b6b3af;
    opacity: 70%;
    border: none;
    width: 100px;
    height: 50px;
    font-size: 16px;
    font-weight: bolder;
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
