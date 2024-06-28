<template>
    <div style="width: 70%; margin: 50px auto">
        <form class="create" style="width: 60%; margin: 0 auto">
            <div v-show="step == false">
                <h5>기본정보 입력하기</h5>
                <div class="form-group mt-4">
                    <label class="form-label">어셈블 이름</label>
                    <input
                        class="form-control"
                        type="text"
                        placeholder="주제/공간 등이 드러나는 이름을 입력해 주세요."
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
                <KakaoAddress />
                <hr />
                <div class="mb-3">
                    <CalendarWrite />
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
                        <img src="@/assets/empty_thumbnail.png" width="170px" height="107px" />
                        <div class="info ms-3">
                            <strong>test</strong>
                            <span>장소 장소에요</span>
                        </div>
                    </div>
                </div>
                <div class="form-group mt-4">
                    <label class="form-label">입장료</label>
                    <div class="input-group">
                        <label data-domain="원">
                            <input
                                class="form-control"
                                type="text"
                                placeholder="입장료를 입력해 주세요."
                                oninput="this.value = this.value.replace(/^0+|\D+/g, '').replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');"
                            />
                        </label>
                    </div>
                </div>
                <div class="form-group mt-4">
                    <label class="form-label">입금 계좌</label>
                    <div class="d-flex">
                        <div class="me-1">
                            <input class="form-control" type="text" placeholder="은행명" />
                        </div>
                        <input class="form-control" type="text" placeholder="계좌 번호" />
                    </div>
                </div>
                <div class="form-group mt-4">
                    <label class="form-label">카테고리</label>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>카테고리를 선택해주세요.</option>
                        <option value="1">맛집</option>
                        <option value="2">운동</option>
                        <option value="3">스터디</option>
                        <option value="4">친목</option>
                        <option value="5">여행</option>
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

const router = useRouter();

const step = ref(false);
const date = ref(new Date());

//썸네일 미리보기
function loadThumb() {
    const input = document.getElementById("file");
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById("thumbnail").src = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
    } else {
        document.getElementById("thumbnail").src = "";
    }
}

let assembleModal = null;

onMounted(() => {
    assembleModal = new Modal(document.getElementById("assembleModal"));
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

//전송시 이미지 경로를 axios경로로 수정
function submitHandler() {
    let content = quill.value.getContent().cloneNode(true).outerHTML;
    const sourcesUrl = content.match(/<img [^>]*src="[^"]*"[^>]*>/gm);
    if (sourcesUrl != null) {
        const sources = sourcesUrl.map((x) => x.replace(/.*src="([^"]*)".*/, "$1"));

        for (var i = 0; i < sources.length; i++) {
            content = content.replace(sources[i], "");
        }
    }
}
</script>

<style scoped>
h5 {
    font-weight: bold;
}

.create {
    text-align: left;
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
</style>
