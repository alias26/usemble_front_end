<template>
    <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.0/font/bootstrap-icons.css"
    />
    <div class="my-4 d-flex border" id="mypageForm">
        <div class="my-4" id="like">
            <div class="mb-5 text-center fw-bold fs-5">
                <i class="bi bi-heart me-1 fw-bold" style="font-size: 40px"></i>
                <p>좋아요</p>
            </div>
            <div class="hr"></div>
            <ul class="nav justify-content-around">
                <li class="nav-item">
                    <a class="nav-link p-3 fw-bold" aria-current="page">내가 찜한 호스트</a>
                </li>
            </ul>

            <div class="bg-light" style="height: 500px">
                <div class="hr"></div>
                <div class="text-secondary align-content-center" style="font-size: 14px">
                    <!-- <div>아직 찜한 호스트가 없으시네요!</div>
                    <div class="mb-4">관심 있는 호스트를 찾아보세요.</div>
                    <button
                        class="p-3 bg-black text-white rounded-1 fw-bold"
                        style="font-size: 14px; border: none"
                    >
                        어셈블 둘러보기
                    </button> -->
                    <div id="like-host" class="d-flex p-2">
                        <UserProfile />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import UserProfile from "@/components/UserProfile.vue";
</script>

<style scoped>
/* #mypageForm {
     width: 70%; 
    margin: 0 auto;
} */

#like {
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
</style>
