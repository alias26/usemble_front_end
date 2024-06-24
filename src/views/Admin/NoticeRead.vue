<template>
    <div class="p-3 mt-4">
        <h3 class="mb-5">공지사항</h3>
        <div class="form-group row">
            <h5 class="col-sm-2">제목</h5>
            <div class="col-sm-10">
                <p>{{ notice.ntitle }}</p>
            </div>
        </div>
        <div class="form-group row">
            <h5 class="col-sm-2">작성일</h5>
            <div class="col-sm-10">
                <p>{{ notice.ndate }}</p>
            </div>
        </div>
        <div class="form-group row">
            <h5 class="col-sm-2">제목</h5>
            <div class="col-sm-10">
                <pre>{{ notice.ncontent }}</pre>
            </div>
        </div>
        <div class="form-group row mt-3">
            <div class="col-sm-12 d-flex justify-content-end">
                <button type="button" class="btn btn-success me-2">수정</button>
                <button type="button" class="btn btn-danger" @click="goNoticeList">뒤로가기</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

function getNotice() {
    const notice = ref({
        ntitle: "공지사항",
        ncontent: "내용",
        ndate: "2024.06.24",
    });

    return notice;
}

const notice = getNotice();

const router = useRouter();

function goNoticeList() {
    router.back();
}
</script>

<style scoped></style>
