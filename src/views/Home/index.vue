<template>
    <div>
        <div class="mainHome">
            <div class="ms-auto me-auto">
                <SocialBanner />
            </div>
            <SocialCardList
                :socials="socials"
                :social1="social1"
                :social2="social2"
                :social3="social3"
                :social4="social4"
                :social5="social5"
            />
        </div>
    </div>
</template>

<script setup>
import SocialCardList from "./SocialCardList.vue";
import SocialBanner from "./SocialBanner.vue";
import socialAPI from "@/apis/socialAPI";

import { onMounted, ref } from "vue";

const socials = ref([]);

onMounted(async () => {
    await getMainSocialList();
    separator();
});

async function getMainSocialList() {
    try {
        const response = await socialAPI.mainSocial();
        socials.value = response.data;
    } catch (error) {
        console.log(error);
    }
}

const social1 = ref([]);
const social2 = ref([]);
const social3 = ref([]);
const social4 = ref([]);
const social5 = ref([]);

function separator() {
    for (let i = 0; i < socials.value.length; i++) {
        if (socials.value[i].ctno == 1) {
            social1.value.push(socials.value[i]);
        } else if (socials.value[i].ctno == 2) {
            social2.value.push(socials.value[i]);
        } else if (socials.value[i].ctno == 3) {
            social3.value.push(socials.value[i]);
        } else if (socials.value[i].ctno == 4) {
            social4.value.push(socials.value[i]);
        } else if (socials.value[i].ctno == 5) {
            social5.value.push(socials.value[i]);
        }
    }
}
</script>

<style scoped></style>
