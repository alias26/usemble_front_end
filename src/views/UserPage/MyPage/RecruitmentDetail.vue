<template>
    <div class="d-flex justify-content-between" id="socialinfo">
        <div class="d-flex">
            <div id="socialimg">
                <RouterLink :to="`/social/detail?sno=${props.recruitment.sno}`">
                    <img
                        :src="`${axios.defaults.baseURL}/social/sthumb/${props.recruitment.sno}`"
                    />
                </RouterLink>
            </div>
            <div>
                <RouterLink class="no-deco" :to="`/social/detail?sno=${props.recruitment.sno}`">
                    <div id="socialtitle">{{ props.recruitment.stitle }}</div>
                </RouterLink>
                <div id="socialcontent">
                    <div class="mb-1">{{ props.recruitment.saddress }}</div>
                </div>
                <div id="socialprice">{{ Number(props.recruitment.sfee).toLocaleString() }}원</div>
            </div>
        </div>
        <div class="justify-content-center align-items-center">
            <RouterLink
                class="text-decoration-none"
                :to="`./recruitmentStatus?sno=${props.recruitment.sno}`"
            >
                <button class="d-flex btn me-4 mb-2" id="host-btn">모집 현황</button>
            </RouterLink>
            <button
                v-if="new Date(props.recruitment.sdeadline) > new Date()"
                class="d-flex btn me-4"
                id="host-btn"
                @click="showCancelSocialModal"
            >
                취소하기
            </button>
        </div>
        <CancelSocialModal
            :id="'cancelSocialModal' + props.recruitment.sno"
            @close="hideCancelSocialModal"
            @cancel="cancelSocial"
        />
    </div>
    <hr class="mx-3" />
</template>

<script setup>
import { onMounted } from "vue";
import CancelSocialModal from "@/components/Social/CancelSocialModal.vue";
import { Modal } from "bootstrap";
import axios from "axios";
import { useRouter } from "vue-router";
import socialAPI from "@/apis/socialAPI";

const props = defineProps(["recruitment"]);
const emit = defineEmits(["reload"]);
const router = useRouter();

let cancelSocialModal = null;

onMounted(() => {
    cancelSocialModal = new Modal(
        document.getElementById("cancelSocialModal" + props.recruitment.sno)
    );
});

function showCancelSocialModal() {
    cancelSocialModal.show();
}

function hideCancelSocialModal() {
    cancelSocialModal.hide();
}

async function cancelSocial() {
    try {
        await socialAPI.updateSocialStatus(props.recruitment.sno, "cancel");
        emit("reload");
        cancelSocialModal.hide();
    } catch (error) {
        console.log(error);
    }
}
</script>

<style scoped>
img {
    width: 180px;
    height: 120px;
}
#socialinfo {
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
}
#socialimg {
    margin: 0 15px;
}
#socialtitle {
    margin-top: 10px;
    font-size: 16px;
    font-weight: 900;
    color: black;
}
#id {
    font-weight: 900;
}
#socialcontent {
    margin-top: 10px;
    font-size: 13px;
    font-weight: 500;
    color: grey;
}

#socialprice {
}

#host-btn {
    justify-content: center;
    background-color: black;
    color: white;
    font-weight: 700;
    width: 120px;
    height: 40px;
}

.no-deco {
    text-decoration: none;
}
</style>
