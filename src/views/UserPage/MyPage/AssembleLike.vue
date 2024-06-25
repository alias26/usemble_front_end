<template>
    <div class="d-flex">
        <div class="like">
            <div class="mb-5 text-center fw-bold fs-5">
                <i class="bi bi-heart me-1 fw-bold" style="font-size: 40px"></i>
                <p>좋아요</p>
            </div>
            <div class="hr"></div>
            <ul class="nav justify-content-around">
                <li class="nav-item">
                    <div class="nav-link fw-bold" aria-current="page" to="LikeHost">
                        내가 찜한 호스트
                    </div>
                </li>
            </ul>

            <div class="bg-light" style="height: 500px">
                <div class="hr"></div>
                <div class="text-secondary align-content-center" style="font-size: 14px">
                    <div v-if="likeList.mids.length == 0">
                        <div>관심 있는 호스트를 찾아보세요.</div>
                        <button
                            class="p-3 bg-black text-white rounded-1 fw-bold"
                            style="font-size: 14px; border: none"
                        >
                            어셈블 둘러보기
                        </button>
                    </div>
                    <div id="like-host" class="p-2">
                        <UserProfile
                            v-for="(mid, index) in likeList.mids"
                            :key="index"
                            :mid="mid"
                            :idx="index"
                            :id="'profile' + index"
                            @handleLikeHistory="handleLikeHistory(index)"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import UserProfile from "@/components/UserProfile.vue";
import memberAPI from "@/apis/memberAPI";
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

const likeList = ref({
    mids: [],
});

async function getUserProfileList(mid) {
    try {
        const response = await memberAPI.getUserProfileList(mid);
        likeList.value.mids = response.data.likeList;
    } catch (error) {
        console.log(error);
    }
}

getUserProfileList(store.state.mid);

function handleLikeHistory(index) {
    document.getElementById("profile" + index).remove();
    getUserProfileList(store.state.mid);
}
</script>

<style scoped>
/* #mypageForm {
     width: 70%; 
    margin: 0 auto;
} */

.like {
    width: 100%;
    margin: 0 auto;
}
#txt {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.hr {
    border-bottom: 1px solid lightgray;
}

#host-info {
    width: 90%;
    overflow: auto;
    text-overflow: ellipsis;
}

#like-btn {
    justify-content: center;
    align-items: center;
    border-color: lightgray;
    width: 120px;
    height: 40px;
}

.nav-link {
    text-align: center;
    color: gray;
}
</style>
