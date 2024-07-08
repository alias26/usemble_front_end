<template>
    <div class="navigation" style="height: 900px">
        <div class="searchMenu-bar">
            <div class="searchMenu">
                <form @submit.prevent="searchListValue">
                    <div
                        class="searchMenu-wrapper mt-3"
                        style="
                            height: 100px;
                            width: 70%;
                            margin: auto;
                            display: flex;
                            align-items: center;
                            border-bottom: solid 1px;
                        "
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="23"
                            height="23"
                            fill="currentColor"
                            class="bi bi-search"
                            viewBox="0 0 16 16"
                        >
                            <path
                                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"
                            />
                        </svg>
                        <input
                            v-model="keyword"
                            placeholder="검색어를 입력해주세요"
                            class="search ms-3"
                            type="text"
                            style="width: 100%; height: 70px; border: 0; font-size: 20px"
                        />
                    </div>
                </form>
            </div>
            <div class="searchResults">
                <div class="searchList">
                    <h3 style="margin-bottom: 40px; text-align: center; margin-top: 50px">
                        <span style="font-weight: 600"> {{ keyword }} 검색 결과</span>
                    </h3>
                    <div class="searchResults">
                        <searchSocialList :searchList="searchList" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from "vue";
import axios from "axios";
import socialAPI from "@/apis/socialAPI";
import searchSocialList from "./SearchSocialList.vue";

const keyword = ref("");
const searchList = ref([]);

async function searchListValue() {
    console.log("검색어:", keyword.value);
    try {
        if (keyword.value !== "" && keyword.value !== null && typeof keyword.value === "string") {
            const response = await socialAPI.getSearchList(keyword.value);
            console.log("타입:", typeof keyword.value);
            searchList.value = response.data.searchSocialList;
            // keyword.value = "";
            console.log("리스트 첫번째", searchList.value[0]);
        } else {
            alert("검색어를 입력해주세요!");
        }
    } catch (error) {
        console.log("발견:" + keyword.value);
        // throw new Error("검색 중 오류 발생: " + error.message);
    }
}
</script>

<style scoped>
input:focus {
    outline: none;
}
</style>
