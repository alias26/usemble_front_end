<template>
    <div class="d-flex justify-content-between" id="socialinfo">
        <div class="d-flex">
            <div id="socialimg">
                <img src="@/assets/와인바.jpg" />
            </div>
            <div>
                <div id="socialtitle">{{ props.application.stitle }}</div>
                <div id="socialcontent">
                    <!-- <div class="mb-1">분재를 현대식으로 좀 더 쉽게 배워보세요.</div> -->
                    <div class="mb-1">{{ props.application.saddress }}</div>
                </div>
                <div id="socialprice">{{ Number(props.application.sfee).toLocaleString() }}원</div>
            </div>
        </div>
        <div>
            <button class="d-flex btn me-4" id="review-btn" @click="showReviewModal">
                리뷰작성
            </button>
            <button class="d-flex btn mt-2 me-4" id="delete-btn" @click="showDelModal">
                삭제하기
            </button>
        </div>
        <ReviewModal id="#reviewModal" @close="hideReviewModal" />
        <DeleteModal id="#delModal" @close="hideDelModal" />
    </div>
    <hr class="mx-3"/>
</template>
<script setup>
import { onMounted } from "vue";
import { Modal } from "bootstrap";
import ReviewModal from "./ReviewModal.vue";
import DeleteModal from "./DeleteModal.vue";

const props = defineProps(["application"]);

let reviewModal = null;
let delModal = null;

onMounted(() => {
    reviewModal = new Modal(document.getElementById("#reviewModal"));
    delModal = new Modal(document.getElementById("#delModal"));
});

function showReviewModal() {
    reviewModal.show();
}

function showDelModal() {
    delModal.show();
}

function hideReviewModal() {
    reviewModal.hide();
}

function hideDelModal() {
    delModal.hide();
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
</style>
