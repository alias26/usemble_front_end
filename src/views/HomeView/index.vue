<template>
    <div>
        <div class="mainHome">
            <div class="d-flex" style="justify-content: space-evenly">
                <SocialBanner />
            </div>
            <SocialCardList />
        </div>
    </div>
</template>

<script setup>
import SocialCardList from "./SocialCardList.vue";
import SocialBanner from "./SocialBanner.vue";
</script>

<style scoped></style>

