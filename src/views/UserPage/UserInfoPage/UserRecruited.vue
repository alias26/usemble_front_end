<template>
    <div
        class="main ms-auto me-auto"
        style="height: auto; width: 65%; min-width: 700px; margin-top: 60px"
    >
        <SocialHeader :title="member.mname + '님이 진행한 어셈블'" />
        <div class="row" style="display: flex; margin-top: 40px">
            <SocialCard
                class="col-4"
                style="width: 32%"
                v-for="(social, index) in prograssed"
                :key="index"
                :social="social"
            />
        </div>
    </div>
</template>

<script setup>
import SocialCard from "@/components/Social/SocialCard.vue";
import SocialHeader from "@/components/Social/SocialHeader.vue";
import { useStore } from "vuex";
import { onMounted, ref } from "vue";
import socialAPI from "@/apis/socialAPI";
import { useRoute } from "vue-router";
import memberAPI from "@/apis/memberAPI";

onMounted(() => {
    getProgressed(route.query.mid);
    getMember(route.query.mid);
});

const route = useRoute();

const prograssed = ref([]);

// 쿼리스트링으로 받은 mid로 mname 받기
const member = ref({
    mname: "",
});
async function getMember(mid) {
    try {
        const response = await memberAPI.getUserProfile(mid);
        member.value.mname = response.data.member.mname;
    } catch (error) {
        console.log(error);
    }
}

// 마감한 어셈블 전체 가져오기
async function getProgressed(mid) {
    try {
        const response = await socialAPI.prograssed(mid);
        prograssed.value = response.data;
    } catch (error) {
        console.log(error);
    }
}

// const progressedeSocials = getProgressedSocials(store.getters.getmid);
</script>

<style scoped></style>
