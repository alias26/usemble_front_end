<template>
    <div class="px-3 pt-3">
        <div>
            <p class="theme-color-text mb-2 me-2">{{ props.review.stitle }}</p>
            <p class="subtext">{{ props.review.mname }} | {{ props.review.sddate }} 참여</p>
        </div>
        <pre>{{ props.review.rcontent }}</pre>
        <hr />
    </div>
</template>

<script setup>
const props = defineProps(["review"]);
</script>

<style scoped>
.subtext {
    color: #707070;
    font-weight: 700;
    font-size: 15px;
}

.theme-color-text {
    color: #558ccf;
    font-weight: 700;
    font-size: 16px;
}

pre {
    color: black;
    font-size: 16px;
    font-family: "NanumSquare", sans-serif;
    overflow-x: hidden;
    white-space: pre-wrap;
}
</style>
