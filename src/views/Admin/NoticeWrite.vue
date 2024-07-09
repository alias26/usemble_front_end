<template>
    <div class="p-3 mt-4">
        <h3 class="mb-5">공지사항 작성</h3>
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
                    <WyswygEditor ref="quill" />
                </div>
            </div>
            <div class="form-group row mt-3">
                <div class="col-sm-12 d-flex justify-content-end">
                    <input type="submit" class="btn btn-success me-2" value="작성" />
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
import { ref } from "vue";
import { useRouter } from "vue-router";
import WyswygEditor from "@/components/WyswygEditor.vue";
import adminAPI from "@/apis/adminAPI";

const notice = ref({
    ntitle: "",
    ncontent: "",
    ndate: ref(new Date()),
    mid: "admin",
});

const router = useRouter();
const quill = ref(null);

function handleCancel() {
    router.back();
}
async function handleSubmit() {
    notice.value.ncontent = quill.value.getContent().innerHTML;
    const response = await adminAPI.writeNotice(notice.value);
    console.log("Success:", response.data);
    router.push("/admin/noticeTable");
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
