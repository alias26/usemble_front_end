<template>
    <div class="mt-5 ms-auto me-auto" style="width: 70%">
        <h4>공지사항</h4>
        <div class="mt-3 mb-3">
            <span class="headline">새로운 어셈블 소식을 확인해보세요.</span>
        </div>
        <div class="notice-container">
            <RouterLink class="notice-item pinned no-underline" to="/notice/detail">
                <div class="notice-item-title">어셈블 착한 수수료정책 (3월시행)</div>
                <div class="notice-item-date">2023년 02월 02일 (목)</div>
            </RouterLink>
            <RouterLink class="notice-item no-underline" to="/notice/detail">
                <div class="notice-item-title">공지사항 1</div>
                <div class="notice-item-date">2023년 02월 02일 (목)</div>
            </RouterLink>
            <RouterLink class="notice-item no-underline" to="/notice/detail">
                <div class="notice-item-title">공지사항 2</div>
                <div class="notice-item-date">2023년 02월 02일 (목)</div>
            </RouterLink>
        </div>
    </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style scoped>
h4 {
    font-weight: bold;
}

.headline {
    font-size: 16px;
    font-weight: 550;
    color: rgb(141, 140, 140);
}

.notice-container {
    border-top: 1px solid black;
}

.pinned {
    background-color: #e7e3e2;
}

.notice-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16.5px 20px;
    border-bottom: 1px solid #e7e3e2;
}

.notice-item-title {
    font-weight: bold;
    color: black;
}

.notice-item-date {
    font-size: 14px;
    font-weight: 550;
    color: #a3a1a1;
}

.no-underline {
    text-decoration: none;
}
</style>
