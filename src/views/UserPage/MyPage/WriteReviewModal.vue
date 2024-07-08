<template>
    <ModalTemplate>
        <template v-slot:header><span class="header fs-4">리뷰 작성</span></template>
        <template v-slot:body>
            <textarea
                :id="'rcontent' + review.sno"
                class="p-3"
                placeholder="리뷰를 작성해주세요."
                v-model="review.rcontent"
            ></textarea>
            <span id="warning" v-if="warning" style="color: red">{{ warnMessage }}</span>
        </template>
        <template v-slot:footer>
            <button
                type="button"
                class="btn btn-secondary"
                @click="closeModal"
                data-bs-dismiss="modal"
            >
                닫기
            </button>
            <button type="button" @click="writeReview" class="btn btn-delete">작성하기</button>
        </template>
    </ModalTemplate>
</template>

<script setup>
import ModalTemplate from "@/components/ModalTemplate.vue";
import { inject, ref } from "vue";
import reviewAPI from "@/apis/reviewAPI";

const emit = defineEmits(["close", "reload"]);
const review = inject("review");
const isReview = inject("isReview");
const warning = ref(false);
const warnMessage = ref("");

async function writeReview() {
    try {
        if (validateReview()) {
            await reviewAPI.writeReview(JSON.parse(JSON.stringify(review.value)));
            isReview.value = !isReview.value;
            emit("close");
        }
    } catch (error) {
        console.log(error);
    }
}

function validateReview() {
    const hyperLink = /(https?:\/\/[^\s]+)|(www\.[^\s]+)/gi;
    const reviewCopy = { ...review.value };

    if (reviewCopy.rcontent.replace(/[^a-zA-Z가-힣]/g, "").length == 0) {
        warning.value = true;
        warnMessage.value = "한글 또는 영어를 이용해서 리뷰를 작성해주세요.";
        return false;
    } else if (hyperLink.test(reviewCopy.rcontent)) {
        warning.value = true;
        warnMessage.value = "하이퍼링크는 리뷰에 포함하실 수 없습니다.";
        return false;
    } else {
        warning.value = false;
        warnMessage.value = "";
        return true;
    }
}

function closeModal() {
    warning.value = false;
    warnMessage.value = "";
    emit("close");
}
</script>

<style scoped>
.header {
    font-weight: 600;
    color: black;
    font-size: 18px;
}

textarea {
    width: 100%;
    height: 300px;
    resize: none;
}

.btn-delete {
    color: white;
    background-color: rgb(254, 100, 100);
}
</style>
