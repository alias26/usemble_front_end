<template>
    <ModalTemplate>
        <template v-slot:header>
            <div class="p-1">
                <h4 class="fw-bold">관심있는 카테고리를 선택하세요.</h4>
                <h5 class="text-secondary">취향에 맞는 어셈블을 찾아보세요.</h5>
            </div>
        </template>

        <template v-slot:body>
            <div class="d-flex justify-content-center">
                <div class="d-flex me-1">
                    <div type="button" class="me-2 rounded-pill fw-bold " id="ct-btn">모임</div>                
                    <div type="button" class="me-2 rounded-pill fw-bold" id="ct-btn">운동</div>
                    <div type="button" class="me-2 rounded-pill fw-bold" id="ct-btn">자기계발</div>
                    <div type="button" class="me-2 rounded-pill fw-bold" id="ct-btn">음식</div>
                    <div type="button" class="rounded-pill fw-bold" id="ct-btn">여행</div>
                </div>
            </div>
        </template>

        <template v-slot:footer>
            <button class="btn" @click="emit('close')">확인</button>
        </template>
    </ModalTemplate>
</template>

<script setup>
import ModalTemplate from "@/components/ModalTemplate.vue";

const emit = defineEmits(["close"]);
</script>

<style scoped>
#ct-btn {
    background-color: #ebf0f7;
    border: none;
    color: #558ccf;
    font-size: 16px;
    padding: 10px 25px;
    height: 50px;
    display: flex;
    text-align: center;
    align-items: center;
    word-break: keep-all;
}
</style>
