<template>
    <div>
        <h3 style="margin-bottom: 40px">
            <span style="font-weight: 600">{{ title }}</span>
        </h3>
        <div class="pageCategory container">
            <div class="wrapper">
                <div class="pageOption">
                    <div class="custom-select me-2">
                        <select class="dropdown-select" v-model.trim="viewSelects.viewCategory">
                            <option :value="all" selected>카테고리</option>
                            <option value="eat">맛집</option>
                            <option value="exercise">운동</option>
                            <option value="study">스터디</option>
                            <option value="friendship">친목</option>
                            <option value="travel">여행</option>
                        </select>
                    </div>
                    <div class="custom-select">
                        <!-- <select class="dropdown-select" v-model="viewSelects.viewSort"> -->
                        <select class="dropdown-select" v-model="viewSelects.viewSort">
                            <option value="정렬" selected>정렬</option>
                            <option value="최신순">최신순</option>
                            <option value="마감임박순">마감임박순</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter , useRoute } from "vue-router";

defineProps(["title"]);

// const router = useRouter();

// const viewSelects = ref({
//     viewCategory: "카테고리",
//     viewSort: "정렬",
// });

// function handleRouting() {
//     // viewSelects.value.viewCategory = router.query.category;
//     console.log(viewSelects.value.viewCategory);
//     if(viewSelects.value.viewCategory === "카테고리"){
//         router.push("/");
//     }
// }

const route = useRoute();

const viewSelects = ref({
    viewCategory: "all",
    viewSort: "정렬",
});

viewSelects.value.viewCategory = route.query.category;

</script>

<style scoped>
/* 페이지 리스트 */
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

.btn {
    background-color: #558ccf;
    color: white;
}

/* select css */
.custom-select {
    position: relative;
}

.dropdown-select {
    appearance: none;
    /*  safari  */
    -webkit-appearance: none;
    /*  other styles for aesthetics */
    width: 100px;
    font-size: 15px;
    padding: 5px 5px 5px 8px;
    background-color: #558ccf;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    border: none;
    outline: none;
}
.custom-select::after {
    --size: 0.3rem;
    content: "";
    position: absolute;
    right: 0.6rem;
    pointer-events: none;
    border-left: var(--size) solid transparent;
    border-right: var(--size) solid transparent;
    border-top: var(--size) solid #fff;
    top: 40%;
}
.dropdown-select > option {
    font-size: 15px;
}
</style>
