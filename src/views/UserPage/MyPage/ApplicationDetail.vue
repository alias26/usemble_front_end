<template>
    <div class="d-flex justify-content-between" id="socialinfo">
        <div class="d-flex">
            <div id="socialimg">
                <RouterLink :to="`/social/detail?sno=${props.application.sno}`">
                    <img
                        :src="`${axios.defaults.baseURL}/social/sthumb/${props.application.sno}`"
                    />
                </RouterLink>
            </div>
            <div>
                <RouterLink class="no-deco" :to="`/social/detail?sno=${props.application.sno}`">
                    <div id="socialtitle">{{ props.application.stitle }}</div>
                </RouterLink>
                <div id="socialcontent">
                    <div class="mb-1">{{ props.application.saddress }}</div>
                </div>
                <div id="socialprice">{{ Number(props.application.sfee).toLocaleString() }}원</div>
            </div>
        </div>
        <div>
            <div v-if="new Date(props.application.sdeadline) <= new Date()">
                <button
                    v-if="!isReview"
                    class="d-flex btn me-4"
                    id="review-btn"
                    @click="showWriteReviewModal"
                >
                    리뷰작성
                </button>
                <button
                    v-if="isReview"
                    class="d-flex btn me-4"
                    id="review-btn"
                    @click="showUpdateReviewModal"
                >
                    리뷰수정
                </button>
                <button
                    class="d-flex btn mt-2 me-4"
                    id="delete-btn"
                    @click="showDeleteJoinHistoryModal"
                >
                    삭제하기
                </button>
            </div>
            <div v-if="new Date(props.application.sdeadline) > new Date()">
                <button
                    class="d-flex btn mt-2 me-4"
                    id="delete-btn"
                    @click="showCancelSocialJoinModal"
                >
                    취소하기
                </button>
            </div>
        </div>
        <WriteReviewModal
            v-if="props.application.sno != null"
            :id="'writeReviewModal' + props.application.sno"
            @close="hideWriteReviewModal"
        />
        <UpdateReviewModal
            v-if="props.application.sno != null"
            :id="'updateReviewModal' + props.application.sno"
            @close="hideUpdateReviewModal"
        />
        <DeleteJoinHistoryModal
            v-if="props.application.sno != null"
            :id="'deleteJoinHistoryModal' + props.application.sno"
            @close="hideDeleteJoinHistoryModal"
            @delete="deleteJoinHistory"
        />
        <CancelSocialJoinModal
            v-if="props.application.sno != null"
            :id="'cancelSocialJoinModal' + props.application.sno"
            @close="hideCancelSocialJoinModal"
            @cancel="cancelSocialJoin"
        />
    </div>
    <hr class="mx-3" />
</template>
<script setup>
import { Modal } from "bootstrap";
import WriteReviewModal from "./WriteReviewModal.vue";
import UpdateReviewModal from "./UpdateReviewModal.vue";
import DeleteJoinHistoryModal from "./DeleteJoinHistoryModal.vue";
import CancelSocialJoinModal from "@/components/Social/CancelSocialJoinModal.vue";
import axios from "axios";
import socialAPI from "@/apis/socialAPI";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { onMounted, ref, provide } from "vue";
import reviewAPI from "@/apis/reviewAPI";

const props = defineProps(["application"]);
const emit = defineEmits(["reload"]);
const router = useRouter();
const store = useStore();

let writeReviewModal = null;
let updateReviewModal = null;
let deleteJoinHistoryModal = null;
let cancelSocialJoinModal = null;

const isReview = ref(false);

onMounted(() => {
    writeReviewModal = new Modal(
        document.getElementById("writeReviewModal" + props.application.sno)
    );
    updateReviewModal = new Modal(
        document.getElementById("updateReviewModal" + props.application.sno)
    );
    deleteJoinHistoryModal = new Modal(
        document.getElementById("deleteJoinHistoryModal" + props.application.sno)
    );
    cancelSocialJoinModal = new Modal(
        document.getElementById("cancelSocialJoinModal" + props.application.sno)
    );
});

function showWriteReviewModal() {
    writeReviewModal.show();
}

function hideWriteReviewModal() {
    writeReviewModal.hide();
}

function showDeleteJoinHistoryModal() {
    deleteJoinHistoryModal.show();
}

function hideDeleteJoinHistoryModal() {
    deleteJoinHistoryModal.hide();
}

function showUpdateReviewModal() {
    updateReviewModal.show();
}

function hideUpdateReviewModal() {
    updateReviewModal.hide();
}

function showCancelSocialJoinModal() {
    cancelSocialJoinModal.show();
}

function hideCancelSocialJoinModal() {
    cancelSocialJoinModal.hide();
}

async function cancelSocialJoin() {
    try {
        await socialAPI.cancelSocialJoin(store.state.mid, props.application.sno);
        emit("reload");
        cancelSocialJoinModal.hide();
    } catch (error) {
        console.log(error);
    }
}

async function deleteJoinHistory() {
    try {
        await socialAPI.cancelSocialJoin(review.value.mid, review.value.sno);
        if (isReview.value) {
            await reviewAPI.deleteReview(review.value.mid, review.value.sno);
            isReview.value = !isReview.value;
        }
        emit("reload");
        deleteJoinHistoryModal.hide();
    } catch (error) {
        console.log(error);
    }
}

async function getIsReview() {
    try {
        const response = await reviewAPI.getIsReview(store.state.mid, props.application.sno);
        isReview.value = response.data.isReview;
    } catch (error) {
        console.log(error);
    }
}

getIsReview();

const review = ref({
    mid: store.state.mid,
    sno: props.application.sno,
    rcontent: "",
});

provide("review", review);
provide("isReview", isReview);

async function getReview() {
    try {
        const response = await reviewAPI.getReview(review.value.mid, review.value.sno);
        if (response.data.review != null) {
            review.value.rcontent = response.data.review.rcontent || "";
        }
    } catch (error) {
        console.log(error);
    }
}

getReview();
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

#review-btn {
    justify-content: center;
    background-color: #558ccf;
    color: white;
    font-weight: 700;
    width: 120px;
    height: 40px;
}

#delete-btn {
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
