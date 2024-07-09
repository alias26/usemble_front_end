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
                    <WyswygEditor
                        v-if="notice.nno != null"
                        ref="quill"
                        :content="notice.ncontent"
                        contentType="html"
                    />
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

import adminAPI from "@/apis/adminAPI";
import WyswygEditor from "@/components/WyswygEditor.vue";
import { useRouter, useRoute } from "vue-router";
const route = useRoute();
const router = useRouter();

const notice = ref({});
const nno = ref(route.query.nno);

async function getNotice(nno) {
    const response = await adminAPI.getNotice(nno);
    notice.value = response.data;
}
getNotice(nno.value);

function handleCancel() {
    router.back();
}

const quill = ref(null);

async function handleSubmit() {
    let content = quill.value.getContent().cloneNode(true).outerHTML;
    notice.value.ncontent = content;
    console.log(notice.value);
    try {
        await adminAPI.noticeUpdate(JSON.parse(JSON.stringify(notice.value)));
        router.push(`/admin/NoticeRead?nno=${nno.value}`);
    } catch (error) {
        console.log(error);
    }
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
