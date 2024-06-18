<template>
    <ModalTemplate>
        <template v-slot:header><span class="header">리뷰 작성</span></template>
        <template v-slot:body><textarea>리뷰를 작성해주세요.</textarea></template>
        <template v-slot:footer>
            <button
                type="button"
                class="btn btn-secondary"
                @click="emit('close')"
                data-bs-dismiss="modal"
            >
                Close
            </button>
            <button type="button" class="btn btn-delete">작성하기</button>
        </template>
    </ModalTemplate>
</template>

<script setup>
import ModalTemplate from "@/components/ModalTemplate.vue";

const emit = defineEmits(["close"]);
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
