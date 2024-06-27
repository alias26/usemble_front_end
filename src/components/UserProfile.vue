<template>
    <div :id="props.id">
        <div class="d-flex justify-content-between userinfo">
            <div class="d-flex">
                <div id="userimg">
                    <RouterLink :to="`/user/info?mid=${props.mid}`">
                        <img :src="mattach" />
                    </RouterLink>
                </div>
                <div>
                    <div id="host">호스트</div>
                    <RouterLink class="no-underline" :to="`/user/info?mid=${props.mid}`">
                        <div id="id">{{ profile.mid }}</div>
                    </RouterLink>
                    <div id="intro">
                        {{ profile.mintroduce }}
                    </div>
                </div>
            </div>
            <div class="d-flex align-items-center">
                <button
                    class="d-flex btn mx-3"
                    id="like-btn"
                    @click="handleLike(store.state.mid, profile.mid)"
                >
                    <i
                        :id="'like' + idx"
                        class="bi me-2"
                        :class="{
                            'bi-heart': !like,
                            'like-deactive': !like,
                            'bi-heart-fill': like,
                            'like-active': like,
                        }"
                    ></i>
                    <div>{{ profile.mlikeCnt }}</div>
                </button>
            </div>
        </div>
        <hr class="mx-2" />
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import memberAPI from "@/apis/memberAPI";

const props = defineProps(["mid", "idx", "id"]);
const emit = defineEmits(["handleLikeHistory"]);

const router = useRouter();

const profile = ref({
    mid: "",
    mintroduce: "",
    mlikeCnt: 0,
});

const mattach = ref(null);

async function getMember(mid) {
    try {
        const response = await memberAPI.getUserProfile(mid);
        profile.value.mid = response.data.member.mid;
        profile.value.mintroduce = response.data.member.mintroduce;
    } catch (error) {
        console.log(error);
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

getMember(props.mid);

getAttach(props.mid);

async function getLikeCnt(mid) {
    try {
        const response = await memberAPI.getLikeCnt(mid);
        profile.value.mlikeCnt = response.data;
    } catch (error) {
        console.log(error);
    }
}

getLikeCnt(props.mid);

//나의 좋아요 상태
const like = ref(false);

async function getLikeState(mid, fmid) {
    try {
        const response = await memberAPI.getLikeState(mid, fmid);
        like.value = response.data;
    } catch (error) {
        console.log(error);
    }
}

const store = useStore();

getLikeState(store.state.mid, props.mid);

async function handleLike(mid, fmid) {
    if (mid === fmid) {
        alert("스스로를 좋아요할 수 없습니다.");
        return;
    }

    like.value = !like.value;
    const likeEl = document.getElementById("like" + props.idx);

    if (like.value) {
        likeEl.classList.remove("bi-heart");
        likeEl.style.color = "red";
        likeEl.classList.add("bi-heart-fill");
        const response = await memberAPI.insertLike(mid, fmid);
    } else {
        likeEl.classList.remove("bi-heart-fill");
        likeEl.style.color = "black";
        likeEl.classList.add("bi-heart");
        const response = await memberAPI.deleteLike(mid, fmid);
        if (emit("handleLikeHistory") != null) {
            emit("handleLikeHistory", props.id);
        }
    }
    getLikeCnt(fmid);
}
</script>

<style scoped>
img {
    border-radius: 50%;
    width: 60px;
}
.userinfo {
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

.like-active {
    color: red;
}

.like-deactive {
    color: black;
}

.no-underline {
    color: black;
    text-decoration: none;
}
</style>
