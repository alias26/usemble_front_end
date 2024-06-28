<template>
    <form @submit.prevent="handleSubmit">
        <div class="d-flex">
            <div class="text-start" id="profileInfoUpdate">
                <div class="mb-2 fs-4 fw-bold">프로필</div>
                <div class="mb-3 text-secondary">
                    낯선 어셈블로 초대를 받기 위해 어떤 일/공부를 하고 계시는지 회원님에 대해
                    알려주세요.
                </div>
                <hr />
                <img class="mt-2" id="proimg" :src="mattach" alt="" />
                <div class="mx-2 my-3">
                    <input id="file" type="file" @change="loadProfileImg" />
                    <label for="file">
                        <div class="d-flex" id="imgbtn">
                            <span class="mx-2">프로필 이미지 수정</span>
                        </div>
                    </label>
                </div>

                <div>
                    <div class="mt-4 mb-1 fs-6 fw-bold text-black">자기소개 입력</div>
                    <div class="rounded p-3 text-secondary fw-bold">
                        <textarea
                            type="text"
                            id="text-box"
                            placeholder="예) OOO에서 그래픽 디자이너로 일하고 있습니다. 일상의 무료함을 달래며 영감을 얻기 위해 어셈블을 시작하게 됐어요! 좋은 분들을 만나 즐거운 시간을 보낼 수 있었으면 좋겠습니다."
                            v-model="member.mintroduce"
                        />
                    </div>
                </div>
                <div class="mt-5 text-center">
                    <button id="sub-btn" @click="updateProfile">등록하기</button>
                </div>
            </div>
        </div>
    </form>
</template>

<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import memberAPI from "@/apis/memberAPI";

const mattach = ref(null);

const member = ref({
    mid: "",
    mintroduce: "",
});

async function getUserProfile(mid) {
    const response = await memberAPI.getUserProfile(mid);
    if (response.data.response == "success") {
        member.value.mid = response.data.member.mid;
        member.value.mintroduce = response.data.member.mintroduce;
    }
}

async function getAttach(mid) {
    try {
        const response = await memberAPI.memberAttachDownload(mid);
        const blob = response.data;
        mattach.value = URL.createObjectURL(blob);
    } catch (error) {
        console.log(error);
    }
}

const store = useStore();

getUserProfile(store.state.mid);

getAttach(store.state.mid);

function loadProfileImg() {
    const input = document.getElementById("file");
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById("proimg").src = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
    } else {
        document.getElementById("proimg").src = "";
    }
}

async function updateProfile() {
    const input = document.getElementById("file");

    const formData = new FormData();
    formData.append("mid", member.value.mid);
    formData.append("mintroduce", member.value.mintroduce);
    if (input.files.length != 0) {
        formData.append("mattach", input.files[0]);
    }

    try {
        const response = await memberAPI.updateProfile(formData);
    } catch (error) {
        console.log(error);
    }
}
</script>

<style scoped>
#profileInfoUpdate {
    width: 100%;
    margin: 0 auto;
}

#text-box {
    width: 100%;
    height: 500px;
    font-size: 14px;
    padding: 20px 20px;
}

#sub-btn {
    align-items: center;
    width: 50%;
    height: 45px;
    background-color: #558ccf;
    border: none;
    color: white;
    font-size: 15px;
    border-radius: 7px 7px;
    font-weight: bold;
}
#proimg {
    border-radius: 50%;
    width: 150px;
    height: 150px;
}
#file {
    display: none;
}
#imgbtn {
    align-items: center;
    height: 45px;
    background-color: #57b17f;
    color: white;
    border: none;
    border-radius: 7px 7px;
    font-weight: bold;
    font-size: 14px;
    padding: 5px 7px;
}

textarea {
    resize: none;
}
</style>
