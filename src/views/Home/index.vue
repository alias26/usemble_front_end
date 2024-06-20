<template>
    <div>
        <div class="mainHome">
            <div class="ms-auto me-auto">
                <SocialBanner />
            </div>
            <SocialCardList :socials="socials1" />
        </div>
    </div>
</template>

<script setup>
import SocialCardList from "./SocialCardList.vue";
import SocialBanner from "./SocialBanner.vue";
import { ref } from "vue";

function getSocialData(ctno) {
    const interest = ref([
        {
            stitle: "어셈블 이름1",
            saddress: "주소1",
            sfee: "50000",
        },
        {
            stitle: "어셈블 이름2",
            saddress: "주소2",
            sfee: "50000",
        },
        {
            stitle: "어셈블 이름3",
            saddress: "주소3",
            sfee: "50000",
        },
        {
            stitle: "어셈블 이름4",
            saddress: "주소4",
            sfee: "50000",
        },
    ]);

    return interest;
}

const socials1 = getSocialData(1);
</script>

<style scoped></style>
