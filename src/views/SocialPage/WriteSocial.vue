<template>
    <div style="width: 70%; margin: 50px auto">
        <form style="width: 60%; margin: 0 auto">
            <div v-show="step == false">
                <h5>기본정보 입력하기</h5>
                <div class="form-group mt-4">
                    <label class="form-label">어셈블 이름</label>
                    <input
                        class="form-control"
                        type="text"
                        placeholder="주제/공간 등이 드러나는 이름을 입력해 주세요."
                        v-model="social.stitle"
                    />
                </div>

                <div class="form-group image mt-4 mb-2">
                    <label class="form-label">대표 이미지</label>
                    <div class="thumbnail-wrapper">
                        <input id="file" type="file" @change="loadThumb" />
                        <label for="file">
                            <img
                                id="thumbnail"
                                class="thumbnail"
                                src="@/assets/empty_thumbnail.png"
                            />
                        </label>
                    </div>
                </div>
                <KakaoAddress @getAddress="getSocialAddress" />
                <hr />
                <div class="mb-3">
                    <CalendarWrite @dateSelected="handleDateSelected" />
                </div>

                <div class="d-flex justify-content-end">
                    <button type="button" @click="changeStep" class="btn btn-next rounded">
                        다음 >
                    </button>
                </div>
            </div>
            <div v-show="step == true">
                <h5>상세정보 입력하기</h5>
                <div class="form-group image border rounded mt-4 mb-2">
                    <div class="d-flex m-2">
                        <img
                            src="@/assets/empty_thumbnail.png"
                            id="thumbnail2"
                            width="170px"
                            height="107px"
                        />
                        <div class="info ms-3">
                            <strong>{{ social.stitle }}</strong>
                            <span>{{ social.sstartDate }} | {{ social.sstartTime }}</span>
                            <span>{{ social.saddress }}</span>
                        </div>
                    </div>
                </div>
                <div class="form-group mt-4">
                    <label class="form-label">입장료</label>
                    <div class="input-group">
                        <label data-domain="원">
                            <input
                                id="sfee"
                                class="form-control"
                                type="text"
                                placeholder="입장료를 입력해 주세요."
                                oninput="this.value = this.value.replace(/^0+|\D+/g, '').replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');"
                            />
                        </label>
                    </div>
                </div>
                <div class="form-group mt-4">
                    <label class="form-label">인원 수</label>
                    <div class="input-group">
                        <label data-domain="명">
                            <input
                                class="form-control"
                                type="number"
                                placeholder="인원 수"
                                v-model="social.smemberCount"
                            />
                        </label>
                    </div>
                </div>
                <div class="form-group mt-4">
                    <label class="form-label">카테고리</label>
                    <select
                        v-model="social.ctno"
                        class="form-select"
                        aria-label="Default select example"
                    >
                        <option :value="0">카테고리를 선택해주세요.</option>
                        <option :value="1">맛집</option>
                        <option :value="2">운동</option>
                        <option :value="3">스터디</option>
                        <option :value="4">친목</option>
                        <option :value="5">여행</option>
                    </select>
                </div>
                <div class="mt-3">
                    <WyswygEditor ref="quill" />
                </div>
                <hr />
                <div class="d-flex justify-content-end">
                    <button
                        type="button"
                        @click="changeStep"
                        class="btn btn-outline-secondary rounded me-2"
                    >
                        뒤로가기
                    </button>
                    <button type="button" class="btn btn-next rounded" @click="showAssembleModal">
                        어셈블
                    </button>
                    <AssembleModal
                        id="assembleModal"
                        @close="hideAssembleModal"
                        @submit="submitHandler"
                    />
                </div>
            </div>
        </form>
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { Modal } from "bootstrap";
import { useRouter } from "vue-router";
import KakaoAddress from "./KakaoAddress.vue";
import CalendarWrite from "@/components/CalendarWrite.vue";
import WyswygEditor from "@/components/WyswygEditor.vue";
import AssembleModal from "./AssembleModal.vue";
import socialAPI from "@/apis/socialAPI";
//날짜 시간 한국 형식
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { useStore } from "vuex";

const router = useRouter();
const store = useStore();

const step = ref(false);
const date = ref(new Date());
//달력 날짜 선택 했을때
const selectedDate = ref(null);

function handleDateSelected(newDate) {
    selectedDate.value = newDate;

    // 날짜와 시간을 한국식으로 포맷
    social.value.sstartDate = format(newDate, "yy/MM/dd", { locale: ko });
    social.value.sstartTime = format(newDate, "HH:mm");
}

const social = ref({
    ctno: 0,
    stitle: "",
    scontent: "",
    sstartDate: "",
    saddress: "",
    sstartTime: "",
    smemberCount: 0,
    sfee: 0,
});

//썸네일 미리보기
function loadThumb() {
    const input = document.getElementById("file");
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById("thumbnail").src = e.target.result;
            document.getElementById("thumbnail2").src = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
    } else {
        document.getElementById("thumbnail").src = "";
        document.getElementById("thumbnail2").src = "";
    }
}

let assembleModal = null;

onMounted(() => {
    assembleModal = new Modal(document.getElementById("assembleModal"));
    // document.addEventListener(
    //     "keydown",
    //     function (event) {
    //         if (event.keyCode === 13) {
    //             event.preventDefault();
    //         }
    //     },
    //     true
    // );
});

const quill = ref(null);

//뒤로가기, 다음 클릭 시 페이지 상태 변환
function changeStep() {
    step.value = !step.value;
    window.scrollTo({ top: 80, left: 0, behavior: "instant" });
}

function showAssembleModal() {
    assembleModal.show();
}

function hideAssembleModal() {
    assembleModal.hide();
}

function getSocialAddress(address) {
    social.value.saddress = address;
}

//전송시 이미지 경로를 axios경로로 수정
async function submitHandler() {
    const formData = new FormData();
    formData.append("mid", store.state.mid);
    formData.append("ctno", social.value.ctno);
    formData.append("stitle", social.value.stitle);
    formData.append("scontent", quill.value.getContent().innerHTML);
    formData.append("sstartDate", social.value.sstartDate);
    formData.append("sstartTime", social.value.sstartTime);
    formData.append("saddress", social.value.saddress);
    formData.append("smemberCount", social.value.smemberCount);

    const sfee = document.getElementById("sfee").value.split(",").join("");

    formData.append("sfee", sfee);

    const input = document.getElementById("file");
    if (input.files && input.files[0]) {
        formData.append("sthumbnail", input.files[0]);
    }

    await socialAPI.writeSocial(formData);

    router.push("/");
}
</script>

<style scoped>
h5 {
    font-weight: bold;
}

.btn-next {
    background-color: #558ccf;
    color: white;
}

#file {
    display: none;
}

.thumbnail-wrapper {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%;
    overflow: hidden;
}

.thumbnail-wrapper .thumbnail {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.form-label {
    text-align: left;
    font-weight: bold;
}

span {
    font-weight: normal;
}

.info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

/* 입장료 input */
.input-group > label {
    width: 100%;
}

.input-group > label::after {
    content: "" attr(data-domain);
    position: absolute;
    top: 7px;
    left: 95%;
    font-size: 16px;
    display: block;
    color: black;
    font-weight: bold;
}

input::-webkit-inner-spin-button {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
}
</style>
