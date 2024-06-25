<template>
    <div class="d-flex">
        <div class="text-start" id="privacyInfoForm">
            <div class="mb-4">
                <h4><strong>개인정보 수정</strong></h4>
            </div>
            <hr />
            <div class="mt-4 text-start">
                <h5 class="mb-5"><strong>로그인 정보</strong></h5>
                <div class="d-flex mb-4">
                    <h6 style="margin-right: 200px"><strong>아이디</strong></h6>
                    <div id="mid" style="color: gray">{{ member.mid }}</div>
                </div>
                <div class="d-flex mb-5">
                    <h6 style="margin-right: 150px"><strong>비밀번호 변경</strong></h6>
                    <RouterLink to="./passwordUpdate">
                        <button class="btn btn-outline-secondary" id="update-btn">
                            <strong>변경하기</strong>
                        </button>
                    </RouterLink>
                </div>
            </div>
            <hr />
            <div class="mt-4 mb-5">
                <h5 class="mb-5"><strong>회원 정보</strong></h5>
                <div class="d-flex mb-4">
                    <h6 style="margin-right: 210px"><strong>이름</strong></h6>
                    <div id="mname" style="color: gray">{{ member.mname }}</div>
                </div>
                <div class="d-flex mb-4">
                    <h6 style="margin-right: 180px"><strong>전화번호</strong></h6>
                    <div class="d-flex" id="pnum">
                        <input
                            class="form-control"
                            id="mphone"
                            style="color: gray"
                            type="tel"
                            :value="mphone1"
                        />
                        <input
                            class="form-control"
                            id="mphone"
                            style="color: gray"
                            type="tel"
                            :value="mphone2"
                        />
                        <input
                            class="form-control"
                            id="mphone"
                            style="color: gray"
                            type="tel"
                            :value="mphone3"
                        />
                    </div>
                </div>
                <div class="d-flex mb-4">
                    <h6 style="margin-right: 170px"><strong>출생 연도</strong></h6>
                    <div id="mssn" style="color: gray">{{ mbirth }}년</div>
                </div>
                <div class="d-flex mb-4">
                    <h6 style="margin-right: 210px"><strong>성별</strong></h6>
                    <div id="mssn" style="color: gray">{{ msex }}</div>
                </div>
                <div class="d-flex mb-4">
                    <h6 style="margin-right: 170px"><strong>계좌정보</strong></h6>
                    <div class="d-flex">
                        <div class="me-2">
                            <input
                                style="color: gray"
                                type="text"
                                class="form-control"
                                id="form-account"
                                name="form-account1"
                                :value="member.mbankName"
                            />
                        </div>
                        <div class="">
                            <input
                                style="color: gray"
                                type="text"
                                class="form-control"
                                id="form-account"
                                name="form-account2"
                                :value="member.mpayAccount"
                            />
                        </div>
                    </div>
                </div>
                <div class="mb-4">
                    <div class="d-flex">
                        <div style="margin-right: 140px; font-size: 16px">
                            <strong>자기소개 입력</strong>
                        </div>
                        <textarea
                            v-model="member.mintroduce"
                            type="text"
                            class="mb-3 form-control"
                            id="mintroduce"
                            placeholder="예)
                        OOO에서 그래픽 디자이너로 일하고 있습니다. 일상의 무료함을 달래며 영감을
                        얻기 위해 어셈블을 시작하게 됐어요! 좋은 분들을 만나 즐거운 시간을 보낼 수
                        있었으면 좋겠습니다."
                        />
                    </div>
                    <div>
                        <button class="btn btn-outline-secondary" id="update-btn">
                            <strong>수정하기</strong>
                        </button>
                    </div>
                </div>
            </div>
            <hr />
            <div class="d-flex mt-4 mb-4">
                <div style="margin-right: 50px">
                    <h5><strong>마케팅 정보 수신 및</strong></h5>
                    <h5><strong> 활용 동의 여부</strong></h5>
                </div>
                <div class="form-check mb-4">
                    <input
                        class="form-check-input"
                        type="checkbox"
                        id="agree2"
                        name="agree2"
                        value="1"
                    />
                    <label class="form-check-label mt-1 fw-bold" for="agree2">
                        (선택) 마케팅 정보 수신 동의
                    </label>
                    <div class="mt-3" style="color: gray">
                        <div>어셈블 소식과 이벤트에 대한 내용을 받아보세요.</div>
                        <div>
                            서비스의 주요 안내 및 결제/모임에 대한 안내는 수신 여부와 관계없이
                            발송됩니다.
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div class="mt-4 mb-5">
                <div class="d-flex mb-4">
                    <h5 style="margin-right: 150px"><strong>회원 탈퇴</strong></h5>
                    <div>
                        <p style="font-size: 18px"><strong>탈퇴시 주의사항</strong></p>
                        <div>
                            · 회원님의 좋아요와 신청한 어셈블 정보 및 결제 정보가 삭제처리됩니다.
                        </div>
                        <div>
                            · 탈퇴 후에도 작성한 리뷰와 신청서의 내용은 서비스 내 계속 표시될 수
                            있습니다.
                        </div>
                        <div>· 탈퇴 후 7일 간은 동일한 계정으로 재가입이 불가합니다.</div>
                        <br />
                        <br />
                        <div style="text-align: right">
                            <button
                                style="border: none; background-color: #fff"
                                @click="showWithdrawModal"
                            >
                                탈퇴하기
                            </button>
                            <WithdrawModal
                                id="#withdrawModal"
                                @close="hideWithdrawModal"
                                @withdraw="submitWithdraw"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { Modal } from "bootstrap";
import WithdrawModal from "./WithdrawModal.vue";
import memberAPI from "@/apis/memberAPI";

const emit = defineEmits(["close"]);

let withdrawModal = null;

const store = useStore();
const router = useRouter();

onMounted(() => {
    withdrawModal = new Modal(document.getElementById("#withdrawModal"));
});

function showWithdrawModal() {
    withdrawModal.show();
}

function hideWithdrawModal() {
    withdrawModal.hide();
}

async function submitWithdraw(mid) {
    await memberAPI.withdrawMember(mid);
    store.dispatch("deleteAuth");
    router.push("/");
}

function getMemberInfo(mid) {
    const member = ref({
        mid: "myeong1709@naver.com",
        mname: "김명환",
        mphone: "01071731709",
        msex: "male",
        mssn: "9506181",
        mbankName: "카카오뱅크",
        mpayAccount: "1111111111",
        mintroduce: "자기소개",
    });

    return member;
}

const member = getMemberInfo("myeong1709@naver.com");

const mphone1 = member.value.mphone.slice(0, 3);
const mphone2 = ref(member.value.mphone.slice(3, 7));
const mphone3 = ref(member.value.mphone.slice(7, 11));

const century = member.value.mssn.charAt(6);
const year = member.value.mssn.slice(0, 2);
const mbirth = century == "1" || century == "2" ? "19" + year : "20" + year;
const msex = member.value.msex == "male" ? "남성" : "여성";
</script>

<style scoped>
#privacyInfoForm {
    width: 100%;
    margin: 0 auto;
}

#update-btn {
    width: 120px;
    height: 45px;
    border-radius: 5%;
    font-size: 15px;
    border-color: #a29e9a;
}

#mintroduce {
    width: 70%;
    height: 100px;
    padding: 10px;
}

input::placeholder {
    text-align: start;
    padding-left: 20px;
    color: #a29e9a;
    font-size: 14px;
    width: 100%;
    overflow-wrap: break-word;
}

input[type="checkbox"] {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    margin-right: 10px;
    border: solid 0.3px #cecac8;
}

input[type="checkbox"]:checked {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    margin-right: 10px;
    border: solid 0.3px #558ccf;
    background-color: #558ccf;
}
#mphone {
    height: 30px;
    width: 70px;
    margin-right: 10px;
}
</style>
