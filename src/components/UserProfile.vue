<template>
    <div class="d-flex justify-content-between" id="userinfo">
        <div class="d-flex">
            <div id="userimg">
                <RouterLink to="/user/info">
                    <img src="@/assets/photo31.jpg" />
                </RouterLink>
            </div>
            <div>
                <div id="host">호스트</div>
                <RouterLink class="no-underline" to="/user/info">
                    <div id="id">myeonghwan57</div>
                </RouterLink>
                <div id="intro">
                    <div>안녕하세요.</div>
                    <div>성남 인근에서 작고 아담한 와인모임을 진행하고 있습니다.</div>
                    <div>와인에 관심있으시면 참여해주세요.</div>
                </div>
            </div>
        </div>
        <div class="d-flex align-items-center">
            <button class="d-flex btn mx-3" id="like-btn" @click="handleLike">
                <i id="like" class="bi bi-heart me-2"></i>
                <div>{{ likeAmount }}</div>
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps(["mid"]);

function getUserProfile(mid) {
    const user = ref({
        mid: "myeonghwan57",
        mintroduce:
            "안녕하세요.성남 인근에서 작고 아담한 와인모임을 진행하고 있습니다.와인에 관심있으시면 참여해주세요.",
    });

    return user;
}

const writer = getUserProfile(props.mid);

//나의 좋아요 상태
const like = ref(false);
const likeAmount = ref(3);

function handleLike() {
    like.value = !like.value;
    const likeEl = document.getElementById("like");

    if (like.value) {
        likeEl.classList.remove("bi-heart");
        likeEl.style.color = "red";
        likeEl.classList.add("bi-heart-fill");
        likeAmount.value++;
    } else {
        likeEl.classList.remove("bi-heart-fill");
        likeEl.style.color = "black";
        likeEl.classList.add("bi-heart");
        likeAmount.value--;
    }
}
</script>

<style scoped>
img {
    border-radius: 50%;
    width: 60px;
}
#userinfo {
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
}
#userimg {
    margin: 0 15px;
}
#host {
    font-size: 12px;
    font-weight: 900;
    color: grey;
}
#id {
    font-weight: 900;
}
#intro {
    margin-top: 10px;
    font-size: 14px;
    font-weight: 500;
    color: grey;
}

#like-btn {
    justify-content: center;
    align-items: center;
    border-color: lightgray;
    width: 120px;
    height: 40px;
}

.no-underline {
    color: black;
    text-decoration: none;
}
</style>
