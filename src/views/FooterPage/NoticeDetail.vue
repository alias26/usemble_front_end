<template>
    <div class="mt-5 ms-auto me-auto" style="width: 70%">
        <span class="headline">공지사항</span>
        <div class="notice-detail-title">
            <div class="notice-detail-name mb-2">남의집 착한 수수료정책 (3월시행)</div>
            <div class="notice-detail-date mb-2">2023년 02월 02일 (목)</div>
        </div>
        <div class="notice-detail-content">
            <span>수수료정책</span>
        </div>
        <div class="d-flex justify-content-center mt-5">
            <button @click="goNoticeList" class="rounded listbtn">목록으로</button>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

function goNoticeList() {
    router.back();
}
</script>

<style scoped>
.headline {
    font-size: 16px;
    font-weight: bold;
    color: rgb(141, 140, 140);
}

.notice-detail-title {
    align-items: center;
    padding: 16.5px 0px;
    border-bottom: 1px solid black;
}

.notice-detail-name {
    font-weight: bold;
    font-size: 24px;
    color: black;
}

.notice-detail-date {
    font-size: 14px;
    font-weight: 550;
    color: #a3a1a1;
}

.notice-detail-content {
    border-bottom: 1px solid black;
    padding: 20.5px 0px;
}

.listbtn {
    padding: 0 120px;
    height: 60px;
    color: #fff;
    background-color: black;
    font-weight: 700;
    font-size: 18px;
    line-height: 90%;
}
</style>
