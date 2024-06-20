<template>
    <div style="width: 70%; margin: 50px auto">
        <form class="create" style="width: 60%; margin: 0 auto">
            <h5>기본정보 입력하기</h5>
            <div class="form-group mt-4">
                <label class="form-label">어셈블 이름</label>
                <input
                    class="form-control"
                    type="text"
                    placeholder="주제/공간 등이 드러나는 이름을 입력해 주세요."
                />
            </div>

            <div class="form-group image mt-4 mb-2">
                <label class="form-label">대표 이미지</label>
                <div class="thumbnail">
                    <input id="file" type="file" multiple @change="loadThumb" />
                    <label for="file">
                        <img id="thumbnail" src="@/assets/empty_thumbnail.png" width="820px" />
                    </label>
                </div>
            </div>
            <KakaoAddress />
            <hr />
            <div class="d-flex justify-content-end">
                <button class="btn btn-outline-secondary rounded me-2">저장하기</button>
                <button type="button" @click.prevent="handleSubmit" class="btn btn-next rounded">
                    다음 >
                </button>
            </div>
        </form>
    </div>
</template>

<script setup>
import KakaoAddress from "./KakaoAddress.vue";
import { useRouter } from "vue-router";

const router = useRouter();

function handleSubmit() {
    router.push("/social/write/detail");
}

function loadThumb() {
    const input = document.getElementById("file");
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById("thumbnail").src = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
    } else {
        document.getElementById("thumbnail").src = "";
    }
}
</script>

<style scoped>
h5 {
    font-weight: bold;
}

.create {
    text-align: left;
    font-weight: bold;
}

.btn-next {
    background-color: #558ccf;
    color: white;
}

#file {
    display: none;
}

.thumbnail {
    width: 820px;
    height: 422px;
    overflow: hidden;
}
</style>
