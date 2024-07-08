<template>
    <div class="searchResults container" style="max-width: 60%">
        <div div class="row" style="display: flex; margin-top: 50px">
            <SocialCard
                class="col-4"
                style="width: 32%"
                v-for="(social, index) in searchList"
                :key="index"
                :social="social"
            />
        </div>
    </div>
</template>

<script setup>
import SocialCard from "@/components/Social/SocialCard.vue";
import { ref, defineProps } from "vue";

const prop = defineProps(["searchList"]);
</script>

<style scoped>
/* 페이지 리스트 */
.pageDetail {
    min-height: 600px;
    justify-content: normal;
    margin-top: 60px;
}
.pageOption {
    flex-wrap: wrap;
    display: flex;
}
.pageCategory {
    margin-top: 20px;
    margin-bottom: 20px;
    justify-content: space-between;
    display: flex;
    padding: 0;
}
.wrapper {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
}

/* 이미지 리스트 */
.main_styles {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 10px;
    justify-content: space-between;
}
.main_styles > img {
    height: 250px;
    width: 100%;
    margin-bottom: 10px;
    position: relative;
}
.main_category {
    text-decoration-line: none;
    color: black;
    margin-bottom: 30px;
    min-width: 150px;
}
.main_text > h3 {
    font-size: 17px;
    font-weight: 600;
    margin-top: 30px;
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
/* 
.btn {
    background-color: #558ccf;
    color: white;
} */

.cur-page {
    font-weight: 800;
    color: #558ccf;
}

.page-btn {
    border: none;
    outline: none;
}

.cur-page:focus {
    border: none;
    outline: none;
}
</style>
