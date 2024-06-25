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

        <div class="mb-4 d-flex">
            <div id="email-bold"><span class="highlight">회원가입</span></div>
            <div id="step1-title">하기</div>
        </div>

        <form @submit.prevent="handleSubmit">
            <div class="mb-4">
                <img src="../../../assets/photo31.jpg" id="img-info" />
                <input id="file" type="file" ref="mattach" multiple />
                <label for="file">
                    <div type="button" id="camera">
                        <i id="camicon" class="bi bi-camera-fill text-white"></i>
                    </div>
                </label>
            </div>
            <div class="mt-4">
                <div class="mb-2 fs-6 fw-bold">자기소개 입력</div>
                <div class="rounded fw-bold">
                    <textarea
                        type="text"
                        id="text-box"
                        placeholder="예) OOO에서 그래픽 디자이너로 일하고 있습니다. 일상의 무료함을 달래며 영감을 얻기 위해 어셈블을 시작하게 됐어요! 좋은 분들을 만나 즐거운 시간을 보낼 수 있었으면 좋겠습니다."
                        v-model="member.mintroduce"
                    />
                </div>
                <div id="intro_warning" class="text-danger" style="font-size: 13px"></div>
            </div>
            <div class="mb-3 mt-3 fs-6 fw-bold">아이디/비밀번호 입력</div>
            <div class="d-flex flex-column mb-2">
                <div class="d-flex">
                    <div class="input-group me-2">
                        <input
                            type="text"
                            id="form-email"
                            class="form-control d-flex"
                            placeholder="이메일주소 입력"
                            v-model="member.mid"
                        />
                    </div>
                    <button type="button" class="btn btn-secondary" id="check-btn">
                        중복 확인
                    </button>
                </div>
                <div id="id_warning" class="text-danger" style="font-size: 13px"></div>
            </div>

            <div class="input-group">
                <input
                    type="password"
                    id="form-input"
                    class="form-control"
                    placeholder="비밀번호 (8자 이상)"
                    v-model="mpwd.mpwd1"
                />
            </div>
            <div id="pwd_warning" class="text-danger" style="font-size: 13px"></div>

            <div class="input-group mt-2">
                <input
                    type="password"
                    id="form-input"
                    class="form-control"
                    placeholder="비밀번호 재입력"
                    v-model="mpwd.mpwd2"
                />
            </div>
            <div id="pwd2_warning" class="text-danger" style="font-size: 13px"></div>

            <div class="mt-4 mb-3 fs-6"><strong>이름</strong></div>
            <div class="input-group">
                <span
                    ><input
                        type="text"
                        id="form-input"
                        class="form-control"
                        placeholder="이름"
                        v-model="member.mname"
                /></span>
            </div>
            <div id="name_warning" class="text-danger" style="font-size: 13px"></div>

            <div class="mt-4 mb-3 fs-6"><strong>생년월일</strong></div>
            <div class="input-group d-flex mb-4">
                <div>
                    <span
                        ><input
                            type="text"
                            id="form-input"
                            class="form-control fw-bold"
                            placeholder="YYMMDD"
                            v-model="member.mbirth"
                    /></span>
                    <div id="birth_warning" class="text-danger" style="font-size: 13px"></div>
                </div>
                <div class="d-flex align-items-center ms-5">
                    <div class="form-check form-check-inline">
                        <input
                            class="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio1"
                            value="남"
                            v-model="member.msex"
                        />
                        <label class="form-check-label" for="inlineRadio1">남</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input
                            class="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio2"
                            value="여"
                            v-model="member.msex"
                        />
                        <label class="form-check-label" for="inlineRadio2">여</label>
                    </div>
                    <div id="sex_warning" class="text-danger" style="font-size: 13px"></div>
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
                                id="form-input"
                                name="form-mphone"
                                v-model="mph.m1"
                            />
                        </span>
                    </div>
                    <div class="me-2">
                        <span
                            ><input
                                type="text"
                                class="form-control"
                                id="form-input"
                                name="form-mphone"
                                v-model="mph.m2"
                        /></span>
                        <div id="phone_warning1" class="text-danger" style="font-size: 13px"></div>
                    </div>
                    <div class="mb-4">
                        <span
                            ><input
                                type="text"
                                class="form-control"
                                id="form-input"
                                name="form-mphone"
                                v-model="mph.m3"
                        /></span>
                        <div id="phone_warning2" class="text-danger" style="font-size: 13px"></div>
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
                        id="form-input"
                        name="form-account1"
                        placeholder="은행명"
                        v-model="member.mbankName"
                    />
                    <div id="bank_warning" class="text-danger" style="font-size: 13px"></div>
                </div>
                <div>
                    <input
                        type="text"
                        class="form-control"
                        id="form-input"
                        name="form-account2"
                        placeholder="계좌번호"
                        v-model="member.mpayAccount"
                    />
                    <div id="account_warning" class="text-danger" style="font-size: 13px"></div>
                </div>
            </div>
            <div class="text-center">
                <button type="submit" id="sub-btn"><strong>다음</strong></button>
            </div>
        </form>
    </div>
</template>

<script setup>
import memberAPI from "@/apis/memberAPI";
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const mph = ref({
    m1: "",
    m2: "",
    m3: "",
});

const mpwd = ref({
    mpwd1: "",
    mpwd2: "",
});
const mattach = ref(null);
const member = ref({
    mid: "",
    mname: "",
    mpassword: "",
    mbirth: "",
    msex: "",
    mphone: "",
    mbankName: "",
    mpayAccount: "",
    mintroduce: "",
});

watch([() => mph.value.m1, () => mph.value.m2, () => mph.value.m3], ([newM1, newM2, newM3]) => {
    member.value.mphone = newM1 + newM2 + newM3;
});
watch([() => mpwd.value.mpwd1, () => mpwd.value.mpwd2], ([newM1, newM2]) => {
    if (newM1 == newM2) {
        member.value.mpassword = newM1;
    }
});

//가입 버튼 클릭시 실행
async function handleSubmit() {
    //유효성 검사 작성.
    const intro_warning = document.getElementById("intro_warning");
    if (member.value.mintroduce.length == 0) {
        intro_warning.innerHTML = "자기소개를 입력해 주세요.";
    }
    const id_warning = document.getElementById("id_warning");
    const validate_id = /^[A-Za-z0-9_\\.\\-]+@[A-Za-z0-9\\-]+\.[A-Za-z0-9\\-]+/;
    if (!validate_id.test(member.value.mid) || !member.value.mid) {
        id_warning.innerHTML = "아이디(메일)형식을 지켜주세요.";
    }
    const pwd_warning = document.getElementById("pwd_warning");
    const validate_pwd = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
    if (!validate_pwd.test(mpwd.value.mpwd1) || !mpwd.value.mpwd1) {
        pwd_warning.innerHTML = "비밀번호 형식에 맞게 입력해주세요.";
    }
    const pwd2_warning = document.getElementById("pwd2_warning");
    if (mpwd.value.mpwd1 != mpwd.value.mpwd2) {
        pwd2_warning.innerHTML = "비밀번호가 일치하지 않습니다.";
    }
    const name_warning = document.getElementById("name_warning");
    const validate_name = /^[가-힣]{1,6}$/;
    if (!validate_name.test(member.value.mname) || !member.value.mname) {
        name_warning.innerHTML = "이름을 형식에 맞게 입력해주세요.";
    }
    const birth_warning = document.getElementById("birth_warning");
    const validate_birth = /^([0-9]{2}(0[1-9]|1[0-2])(0[1-9]|[1,2][0-9]|3[0,1]))$/;
    if (!validate_birth.test(member.value.mbirth) || !member.value.mbirth) {
        birth_warning.innerHTML = "생년월일을 형식에 맞게 입력해주세요.";
    }
    const sex_warning = document.getElementById("sex_warning");
    const is_check_m = document.getElementById("inlineRadio1").checked;
    const is_check_w = document.getElementById("inlineRadio2").checked;
    if (is_check_m == false && is_check_w == false) {
        sex_warning.innerHTML = "성별을 선택해 주세요.";
    }
    const validate_phone = /^[0-9]{4}$/;
    const phone_warning1 = document.getElementById("phone_warning1");
    const phone_warning2 = document.getElementById("phone_warning2");
    if (!validate_phone.test(mph.value.m2) || !mph.value.m2) {
        phone_warning1.innerHTML = "형식에 맞게 입력하세요.";
    }
    if (!validate_phone.test(mph.value.m3) || !mph.value.m3) {
        phone_warning2.innerHTML = "형식에 맞게 입력하세요.";
    }
    const bank_warning = document.getElementById("bank_warning");
    const validate_bank = /^[가-힣]{1,7}$/;
    if (!validate_bank.test(member.value.mbankName) || !member.value.mbankName) {
        bank_warning.innerHTML = "은행명을 형식에 맞게 입력해주세요.";
    }
    const account_warning = document.getElementById("account_warning");
    const validate_account = /^[0-9]{1,20}$/;
    if (!validate_account.test(member.value.mpayAccount) || !member.value.mpayAccount) {
        account_warning.innerHTML = "계좌번호를 형식에 맞게 입력해주세요.";
    }

    const formData = new FormData();
    formData.append("mid", member.value.mid);
    formData.append("mname", member.value.mname);
    formData.append("mpassword", member.value.mpassword);
    formData.append("mbirth", member.value.mbirth);
    formData.append("msex", member.value.msex);
    formData.append("mphone", member.value.mphone);
    formData.append("mbankName", member.value.mbankName);
    formData.append("mpayAccount", member.value.mpayAccount);
    formData.append("mintroduce", member.value.mintroduce);

    const elMattach = mattach.value;
    if (elMattach.files.length != 0) {
        formData.append("mattach", elMattach.files[0]);
    }
    try {
        const response = await memberAPI.join(formData);
        router.push({
            path: "joinCategory",
            params: {
                formData: formData,
            },
        });
    } catch (error) {
        console.log(error);
    }
}
</script>

<style scoped>
#joinForm {
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

#img-info {
    border-radius: 50%;
    width: 100px;
}

#camera {
    width: 30px;
    height: 30px;
    background-color: #558ccf;
    border: none;
    border-radius: 50%;
    position: absolute;
    transform: translate(-100%, 55%);
}
#camicon {
    position: absolute;
    transform: translate(44%, 15%);
}
#text-box {
    width: 100%;
    font-size: 14px;
    padding: 20px 20px;
}

textarea {
    resize: none;
    border-color: lightgray;
    border-radius: 7px;
}
#file {
    display: none;
}
</style>
