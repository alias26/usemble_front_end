<template>
    <div class="d-flex justify-content-between" id="socialinfo">
        <div class="d-flex">
            <div id="socialimg">
                <img src="@/assets/와인바.jpg" />
            </div>
            <div>
                <div id="socialtitle">현대식 분재 그리고 와인</div>
                <div id="socialcontent">
                    <div class="mb-1">분재를 현대식으로 좀 더 쉽게 배워보세요.</div>
                    <div class="mb-1">서울특별시 노원구 공릉로26길 26</div>
                </div>
                <div id="socialprice">24,000원</div>
            </div>
        </div>
        <div class="d-flex justify-content-center align-items-center">
            <button class="d-flex btn me-4" id="delete-btn" @click="showDelModal">삭제하기</button>
        </div>
        <DeleteModal id="#delModal" @close="hideDelModal" />
    </div>
</template>

<script setup>
import { onMounted } from "vue";
import DeleteModal from "./DeleteModal.vue";
import { Modal } from "bootstrap";

let delModal = null;

onMounted(() => {
    delModal = new Modal(document.getElementById("#delModal"));
});

function showDelModal() {
    delModal.show();
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

#socialprice {
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
