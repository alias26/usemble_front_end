<template>
    <div class="mt-5 ms-auto me-auto" style="width: 70%">
        <h4>공지사항</h4>
        <div class="mt-3 mb-3">
            <span class="headline">새로운 어셈블 소식을 확인해보세요.</span>
        </div>
        <div class="notice-container">
            <div v-for="(notice, index) in noticeList" :key="index">
                <RouterLink
                    v-if="index === 0"
                    class="notice-item pinned no-underline"
                    to="/notice/detail"
                >
                    <div class="notice-item-title">{{ notice.ntitle }}</div>
                    <div class="notice-item-date">{{ notice.ndate }}</div>
                </RouterLink>
                <RouterLink v-else class="notice-item no-underline" to="/notice/detail">
                    <div class="notice-item-title">{{ notice.ntitle }}</div>
                    <div class="notice-item-date">{{ notice.ndate }}</div>
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

function getNoticeList() {
    const noticeList = ref([
        {
            nno: "1",
            ntitle: "어셈블 착한 수수료정책 (3월시행)",
            ndate: "2023년 02월 02일 (목)",
        },
        {
            nno: "2",
            ntitle: "공지사항 1",
            ndate: "2023년 02월 02일 (목)",
        },
        {
            nno: "3",
            ntitle: "공지사항 2",
            ndate: "2023년 02월 02일 (목)",
        },
    ]);
    return noticeList;
}

const noticeList = getNoticeList();
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
