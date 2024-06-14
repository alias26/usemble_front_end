<template>
    <div class="d-flex mt-5 border" id="mypageForm">
        <div class="mt-4 d-flex w-100 border">
            <TabMenu />
            <div class="mt-4 text-start">
                <RouterView />
            </div>
        </div>
    </div>
</template>

<script setup>
import TabMenu from "./TabMenu.vue";
</script>

<style scoped></style>
