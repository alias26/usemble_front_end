<template>
    <a class="main_category" :style="props.style" href="/">
        <div class="main_list-wrapper">
            <div class="main_styles">
                <img src="@/assets/us2.jpg"/>
            </div>
        </div>
        <div class="main_text">
            <h3>나의태양 김주희 희망강연: 어이 곽씨 코드가져와!</h3>
            <h5 style="margin-bottom: 15px">나의빛 나의어둠 나의희망 나의절망</h5>
        </div>
        <div class="main_additional mb-4">
            <div class="caption mt-3">
                <p>송파구 IT벤처타워 서관 16층</p>
                <span style="margin-bottom: 10px"> 50,000 원~ </span>
            </div>
        </div>
    </a>
</template>

<script setup>
const props = defineProps(["style"]);

</script>

<style scoped>
.new_host {
    font-weight: 700;
}

.container {
    border-style: none;
}
.main_styles {
    margin-bottom: 30px;
}
.main_styles > img {
    height: 230px;
    margin-bottom: 10px;
    width: 100%;
    position: relative;
    object-fit: cover;
}
.main_page_episodes {
    display: flex;
    flex-wrap: wrap;
}
.host_text {
    color: gray;
    font-size: large;
    font-weight: 600;
    justify-content: space-between;
    display: flex;
}
.main_text > h3 {
    font-size: 18px;
    font-weight: 800;
    margin-bottom: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.main_text > h5 {
    font-size: 14px;
    height: 54px;
    overflow: hidden;
    height: 2.4em;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.caption > p {
    font-size: 12px;
    color: gray;
    margin-bottom: 0px;
}
.main_additional {
    border-top: 1px solid #ddd;
}
.main_category {
    text-decoration-line: none;
    color: black;
    margin-bottom: 30px;
}
</style>
