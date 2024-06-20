<template>
    <div
        class="main ms-auto me-auto"
        style="height: auto; width: 65%; min-width: 700px; margin-top: 60px"
    >
        <SocialHeader :title="mname + '님이 진행한 어셈블'" />
        <div class="row" style="display: flex; margin-top: 40px">
            <SocialCard
                class="col-4"
                style="width: 32%"
                v-for="(social, index) in progressedeSocials"
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
import { ref } from "vue";

const store = useStore();

const mname = "김명환";

function getProgressedSocials() {
    const socials = ref([
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
    ]);

    return socials;
}

const progressedeSocials = getProgressedSocials(store.getters.getmid);
</script>

<style scoped></style>
