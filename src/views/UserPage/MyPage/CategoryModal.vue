<template>
    <ModalTemplate>
        <template v-slot:header>
            <span class="header">
                <h4>관심있는 카테고리를 선택하세요.</h4>
                <h5 class="text-secondary">취향에 맞는 어셈블을 찾아보세요.</h5>
            </span>
        </template>

        <template v-slot:body>
            <div class="d-flex justify-content-center">
                <div class="d-flex me-1">
                    <div v-for="(cate, index) in category" :key="index">
                        <input
                            type="button"
                            :value="cate.ctname"
                            class="btn ct-btn me-2"
                            :class="{
                                'ct-btn': !selected[index],
                                'ct-btn-select': selected[index],
                            }"
                            @click="selectCategory(index)"
                        />
                    </div>
                </div>
            </div>
        </template>

        <template v-slot:footer>
            <button class="btn" @click="emit('close')">확인</button>
        </template>
    </ModalTemplate>
</template>

<script setup>
import memberAPI from "@/apis/memberAPI";
import ModalTemplate from "@/components/ModalTemplate.vue";
import { ref } from "vue";

const emit = defineEmits(["close"]);

const prop = defineProps(["mid", "mcategory"]);
const category = ref([]);
const selected = ref([false, false, false, false, false]);
// true의 개수를 세는 cnt
const cnt = ref(0);
const mcategory = ref([]);
async function getCategoryList() {
    try {
        const response = await memberAPI.getCategory();
        category.value = response.data;
        // console.log(category.value);
    } catch (error) {
        console.log(error);
    }
}
getCategoryList();
getMcategoryList(prop.mid);
async function getMcategoryList(mid) {
    try {
        const response = await memberAPI.getMcategory(mid);
        mcategory.value = response.data;
        console.log(mcategory.value);
        console.log(prop.mid);
    } catch (error) {
        console.log(error);
    }

    // for (let i = 0; i < category.value.length; i++) {
    //     for (let j = 0; j < mcategory.value.length; i++) {
    //         if (category.value[i].ctno == mcategory.value[j].ctno) {
    //             selected.value[i] = true;
    //         }
    //     }
    // }
}

function selectCategory(index) {
    if (cnt.value == 3) {
        // 카테고리를 3개 선택하면 더이상 선택할 수 없도록 하고, 선택된 카테고리를 선택 취소하면 true -> false
        if (selected.value[index] == false) {
            selected.value[index] = false;
        } else {
            selected.value[index] = false;
            cnt.value = cnt.value - 1;
            const delValue = mcategory.value.indexOf(category.value[index].ctno);
            mcategory.value.splice(delValue, 1);
        }
    } else if (cnt.value < 3) {
        // 선택된 카테고리가 3개 이하이면 다시 선택할 때 true, false 값을 바꿔주고 cnt를 더하거나 뺌
        if (selected.value[index] == false) {
            selected.value[index] = true;
            mcategory.value.push(category.value[index].ctno);
            cnt.value = cnt.value + 1;
        } else {
            selected.value[index] = false;
            cnt.value = cnt.value - 1;
            const delValue = mcategory.value.indexOf(category.value[index].ctno);
            mcategory.value.splice(delValue, 1);
        }
    }
}

async function updateCategory() {
    try {
        const response = await memberAPI.getCategory();
        const response_mcate = await memberAPI.updateMcategory();
        category.value = response.value;
    } catch (error) {
        console.log(error);
    }
}
</script>

<style scoped>
.ct-btn {
    background-color: #ebf0f7;
    border-radius: 50px;
    color: #558ccf;
    font-size: 16px;
    padding: 10px 25px;
    height: 50px;
    display: flex;
    text-align: center;
    align-items: center;
    word-break: keep-all;
}

.ct-btn:hover {
    color: white;
    background-color: #57b17f;
    padding: 10px 25px;
    border-radius: 50px;
    opacity: 70%;
    font-size: 16px;
    font-weight: bolder;
}

.ct-btn-select {
    color: white;
    border: #57b17f;
    background-color: #57b17f;
    padding: 10px 25px;
    border-radius: 50px;
    opacity: 70%;
    font-size: 16px;
    font-weight: bolder;
}
</style>
