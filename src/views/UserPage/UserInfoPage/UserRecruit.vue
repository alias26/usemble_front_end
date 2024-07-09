<template>
    <div
        class="main ms-auto me-auto"
        style="height: auto; width: 65%; min-width: 700px; margin-top: 60px"
    >
        <SocialHeader :title="member.mname + '님이 진행한 어셈블'" />
        <div class="row" style="display: flex; margin-top: 40px">
            <SocialCard
                v-for="(social, index) in inprograss"
                :key="index"
                class="col-4"
                style="width: 32%"
                :social="social"
            />
        </div>
    </div>
</template>

<script setup>
import SocialCard from "@/components/Social/SocialCard.vue";
import SocialHeader from "@/components/Social/SocialHeader.vue";
import { onMounted, ref } from "vue";
import socialAPI from "@/apis/socialAPI";
import { useRoute } from "vue-router";
import memberAPI from "@/apis/memberAPI";

onMounted(() => {
    getRecruit(route.query.mid);
    getMember(route.query.mid);
});

const route = useRoute();

const member = ref({
    mname: "",
});

// 쿼리스트링으로 받은 mid로 mname 받기
async function getMember(mid) {
    try {
        const response = await memberAPI.getUserProfile(mid);
        member.value.mname = response.data.member.mname;
    } catch (error) {
        console.log(error);
    }
}

// 신청한 어셈블 전체 보기
const inprograss = ref([]);
async function getRecruit(mid) {
    try {
        const response = await socialAPI.inprograss(mid);
        inprograss.value = response.data;
        console.log(inprograss.value);
    } catch (error) {
        console.log(error);
    }
}
</script>

<style scoped></style>
