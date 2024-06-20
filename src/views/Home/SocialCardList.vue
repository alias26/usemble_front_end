<template>
    <div class="main ms-auto me-auto" style="height: auto; width: 65%; min-width: 700px">
        <h3 class="new_host mb-3 mt-5">따끈따끈 신규 호스트</h3>
        <h4 class="host_text mb-4">
            초보 호스트님들은 기대하고 설레~
            <RouterLink to="/list" style="text-decoration-line: none; color: black"
                >전체보기</RouterLink
            >
        </h4>
        <div class="main_page_episodes">
            <SocialCard
                v-for="(social, index) in props.socials"
                :key="index"
                style="width: 24%"
                class="me-3"
                :social="social"
            />
        </div>
    </div>
</template>

<script setup>
import SocialCard from "@/components/Social/SocialCard.vue";

const props = defineProps(["socials"]);
</script>

<style scoped>
.new_host {
    font-weight: 700;
}

.container {
    border-style: none;
}
.main_styles {
    margin-bottom: 10px;
}
.main_styles > img {
    height: 200px;
    margin-bottom: 10px;
    width: 100%;
    position: relative;
}
.main_page_episodes {
    display: flex;
}
.host_text {
    color: gray;
    font-size: large;
    font-weight: 600;
    justify-content: space-between;
    display: flex;
}
.main_category {
    text-decoration-line: none;
    color: black;
    width: 23%;
}
.main_text > h3 {
    font-size: 17px;
    font-weight: 600;
    margin-bottom: 30px;
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
</style>
