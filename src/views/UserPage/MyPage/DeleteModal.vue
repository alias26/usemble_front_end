<template>
    <ModalTemplate>
        <template v-slot:header><span class="header">내역 삭제</span></template>
        <template v-slot:body>정말로 내역을 삭제하시겠습니까?</template>
        <template v-slot:footer>
            <button
                type="button"
                class="btn btn-secondary"
                @click="emit('close')"
                data-bs-dismiss="modal"
            >
                Close
            </button>
            <button type="button" class="btn btn-delete">삭제하기</button>
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

.btn-delete {
    color: white;
    background-color: rgb(254, 100, 100);
}
</style>
