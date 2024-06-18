<template>
    <div>
        <div class="main ms-auto me-auto" style="height: auto; width: 65%; min-width: 700px">
            <h3 class="new_host mb-3 mt-5">사용자이름님이 진행한 어셈블</h3>
            <div class="row" style="display: flex; margin-top: 40px">
                <SocialCard class="col-4" style="width: 32%" v-for="n in 4" :key="n" />
            </div>
        </div>
    </div>
</template>

<script setup>
import SocialCard from "@/components/Social/SocialCard.vue";
</script>

<style scoped>
</style>