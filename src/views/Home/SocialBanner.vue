<template>
    <div class="ms-auto me-auto" style="width: 70%; min-width: 800px">
        <div class="main-img" style="text-align: center">
            <img src="@/assets/usemble.jpg" width="100%" />
        </div>
        <div class="category container d-flex">
            <div class="main_category"><img src="@/assets/category/eat.png" />맛집</div>
            <div class="main_category"><img src="@/assets/category/exercise.png" />운동</div>
            <div class="main_category"><img src="@/assets/category/study.png" />스터디</div>
            <div class="main_category"><img src="@/assets/category/friendship.png" />친목</div>
            <div class="main_category"><img src="@/assets/category/travel.png" />여행</div>
            <RouterLink class="main_category no-underline" to="list"
                ><img src="@/assets/category/all.png" />전체보기</RouterLink
            >
        </div>
    </div>
</template>

<script setup></script>

<style scoped>
.category {
    margin-top: 50px;
    min-width: 50%;
    justify-content: center;
}


.main_category {
    cursor: pointer;
    width: 70%;
    justify-items: center;
    display: inline-grid;
    font-size: 16px;
    font-weight: 600;
    /* margin-left: 50px;
    margin-right: 50px; */
}

.main_category::before {
    content: "";
    display: block;
}

.main_category > img {
    width: 85px;
    height: 85px;
    border-radius: 50%;
}
.main_img {
    width: 100%;
    height: 380px;
    margin-left: auto;
    margin-right: auto;
}

.no-underline {
    color: black;
    text-decoration: none;
}
</style>
