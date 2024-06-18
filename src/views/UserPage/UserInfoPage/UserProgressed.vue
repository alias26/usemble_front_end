<template>
    <div
        class="main ms-auto me-auto"
        style="height: auto; width: 65%; min-width: 700px; margin-top: 60px"
    >
        <SocialHeader :title="userName + '님이 진행한 어셈블'" />
        <div class="row" style="display: flex; margin-top: 40px">
            <SocialCard class="col-4" style="width: 32%" v-for="n in 7" :key="n" />
        </div>
    </div>
</template>

<script setup>
import SocialCard from "@/components/Social/SocialCard.vue";
import SocialHeader from "@/components/Social/SocialHeader.vue";
</script>

<style scoped></style>
