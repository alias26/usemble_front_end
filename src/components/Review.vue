<template>
    <div>
        <div>
            <p class="theme-color-text mb-1">{{ props.review.stitle }}</p>
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
    font-size: 14px;
}

.theme-color-text {
    color: #558ccf;
    font-weight: 700;
    font-size: 14px;
}

pre {
    font-family: "NanumSquare", sans-serif;
}
</style>
