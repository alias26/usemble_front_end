<template>
    <div class="card mt-4">
        <div class="card-body">
            <div class="d-flex justify-content-between">
                <h5>{{ title }}</h5>
                <RouterLink class="show-more" to="/user/progressed">더보기</RouterLink>
            </div>
            <div class="row mt-3">
                <SocialCard v-for="index in 3" :key="index" class="col-4" />
            </div>
        </div>
    </div>
</template>

<script setup>
import SocialCard from "@/components/Social/SocialCard.vue";

defineProps(["title"]);
</script>

<style scoped>
h5 {
    font-size: 18px;
    font-weight: 700;
    margin: 14px 0px;
}

.show-more {
    color: #858585;
    /* text-decoration: none; */
    margin: auto 0px;
}
</style>
