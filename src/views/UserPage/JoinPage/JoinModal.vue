<template>
    <ModalTemplate>
        <template v-slot:header>
            <i id="check" class="bi bi-check-circle-fill"></i>
        </template>

        <template v-slot:body
            ><h4>축하드립니다!</h4>
            <h5 class="text-secondary">회원가입을 완료했습니다!</h5></template
        >

        <template v-slot:footer>
            <button type="button" class="btn" @click="emit('close')" data-bs-dismiss="modal">
                확인
            </button>
        </template>
    </ModalTemplate>
</template>
<script setup>
import ModalTemplate from "@/components/ModalTemplate.vue";
const emit = defineEmits(["close"]);
</script>
<style scoped>
#check {
    color: #57b17f;
    font-size: 50px;
}
h5 {
    text-align: center;
}
</style>
