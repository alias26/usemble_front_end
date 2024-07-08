<template>
    <ModalTemplate>
        <template v-slot:header><span class="header fs-4">리뷰 수정</span></template>
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
            <button type="button" @click="updateReview" class="btn btn-update">수정하기</button>
        </template>
    </ModalTemplate>
</template>

<script setup>
import ModalTemplate from "@/components/ModalTemplate.vue";
import reviewAPI from "@/apis/reviewAPI";
import { inject } from "vue";

const emit = defineEmits(["close"]);
const review = inject("review");

async function updateReview() {
    try {
        await reviewAPI.updateReview(JSON.parse(JSON.stringify(review.value)));
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

.btn-update {
    color: white;
    background-color: #558ccf;
}

.btn-delete {
    color: white;
    background-color: rgb(254, 100, 100);
}
</style>
