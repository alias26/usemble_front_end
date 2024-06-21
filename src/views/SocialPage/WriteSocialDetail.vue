<template>
    <div style="width: 70%; margin: 50px auto">
        <form class="create" style="width: 60%; margin: 0 auto">
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
                        <input class="form-control" type="text" placeholder="입장료를 입력해 주세요." 
                        oninput="this.value = this.value.replace(/^0+|\D+/g, '').replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');"/>
                    </label>
                </div>
            </div>
            <div class="form-group mt-4">
                <label class="form-label">입금 계좌</label>
                <div class="d-flex">
                    <span class="me-1"
                        ><input class="form-control" type="text" placeholder="은행명"
                    /></span>
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
                    @click="goUrlBack"
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
        </form>
    </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import WyswygEditor from "@/components/WyswygEditor.vue";
import { onMounted, ref } from "vue";
import { Modal } from "bootstrap";
import AssembleModal from "./AssembleModal.vue";

let assembleModal = null;
const quill = ref(null);

onMounted(() => {
    assembleModal = new Modal(document.getElementById("assembleModal"));
});

const router = useRouter();

function goUrlBack() {
    router.back();
}

function showAssembleModal() {
    assembleModal.show();
}

function hideAssembleModal() {
    assembleModal.hide();
}

function submitHandler() {
    let content = quill.value.getContent().cloneNode(true).outerHTML;
    const sources = content
        .match(/<img [^>]*src="[^"]*"[^>]*>/gm)
        .map((x) => x.replace(/.*src="([^"]*)".*/, "$1"));

    for (var i = 0; i < sources.length; i++) {
        content = content.replace(sources[i], "");
    }

    console.log(content);
}

</script>

<style scoped>
h5 {
    font-weight: bold;
}

.form-label {
    text-align: left;
    font-weight: bold;
}

.btn-next {
    background-color: #558ccf;
    color: white;
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
    content: '' attr(data-domain);
    position: absolute;
    top: 7px;
    left: 95%;
    font-size: 16px;
    display: block;
    color: black;
    font-weight: bold;
}
</style>
