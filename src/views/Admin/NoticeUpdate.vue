<template>
    <div class="p-3 mt-4">
        <h3 class="mb-5">공지사항 수정</h3>
        <form @submit.prevent="handleSubmit">
            <div class="form-group row">
                <label for="ntitle" class="col-sm-2 col-form-label">제목</label>
                <div class="col-sm-10">
                    <input id="ntitle" type="text" class="form-control" v-model="notice.ntitle" />
                </div>
            </div>
            <div class="form-group row mt-3">
                <label for="ncontent" class="col-sm-2 col-form-label">내용</label>
                <div class="col-sm-10">
                    <WyswygEditor ref="quill" :content="notice.ncontent" contentType="html" />
                </div>
            </div>
            <div class="form-group row mt-3">
                <div class="col-sm-12 d-flex justify-content-end">
                    <input type="submit" class="btn btn-success me-2" value="수정" />
                    <input
                        type="button"
                        class="btn btn-danger"
                        value="취소"
                        @click="handleCancel"
                    />
                </div>
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
import { useRouter } from "vue-router";
import WyswygEditor from "@/components/WyswygEditor.vue";

function getNoticeDetail() {
    const notice = ref({
        ntitle: "제목1",
        ncontent: "내용12345",
    });

    return notice;
}

const notice = getNoticeDetail();

const router = useRouter();

function handleCancel() {
    router.back();
}

const quill = ref(null);

function handleSubmit() {
    notice.ncontent = quill.value.getContent();

    console.log(notice);
}
</script>

<style scoped>
textarea {
    height: 400px;
    resize: none;
}

.col-form-label {
    font-size: 18px;
}
</style>
