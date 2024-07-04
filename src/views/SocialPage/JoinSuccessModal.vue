<template>
    <ModalTemplate>
        <template v-slot:header>
            <div class="p-1">
                <h5 class="fw-bold">어셈블!</h5>
            </div>
        </template>
        <template v-slot:body>
            <div><span>성공적으로 어셈블에 참여했습니다!</span></div>
        </template>
        <template v-slot:footer>
            <button class="btn" @click="goUrlHome" data-bs-dismiss="modal">닫기</button>
        </template>
    </ModalTemplate>
</template>

<script setup>
import ModalTemplate from "@/components/ModalTemplate.vue";
import { useRouter } from "vue-router";

const router = useRouter();
const emit = defineEmits(["close"]);

function goUrlHome() {
    emit("close");
    router.push("/");
}
</script>

<style scoped>
.btn {
    background-color: #558ccf;
    border: none;
    color: #ebf0f7;
    font-size: 16px;
    padding: 10px 25px;
    height: 50px;
    display: flex;
    text-align: center;
    align-items: center;
    word-break: keep-all;
    font-size: 16px;
    font-weight: 600;
}
.btnCancel {
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
    border-radius: 8%;
}
</style>
