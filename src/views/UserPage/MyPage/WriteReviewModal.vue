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
        </template>
        <template v-slot:footer>
            <button
                type="button"
                class="btn btn-secondary"
                @click="emit('close')"
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
import { inject } from "vue";
import reviewAPI from "@/apis/reviewAPI";

const emit = defineEmits(["close", "reload"]);
const review = inject("review");
const isReview = inject("isReview");

async function writeReview() {
    try {
        await reviewAPI.writeReview(JSON.parse(JSON.stringify(review.value)));
        isReview.value = !isReview.value;
        emit("close");
    } catch (error) {
        console.log(error);
    }
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
