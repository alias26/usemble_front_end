<template>
    <div class="px-3 pt-3">
        <div>
            <p class="theme-color-text mb-2 me-2">{{ props.review.stitle }}</p>
            <p class="subtext">
                {{ props.review.mname }} |
                {{ new Date(props.review.sstartDate).toLocaleDateString() }} 참여
            </p>
        </div>
        <pre class="review-text">{{ props.review.rcontent }}</pre>
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
    font-family: "NanumSquare", sans-serif;
    font-size: 14px;
}

.review-text {
    /* 한 줄 자르기 */
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    /* 여러 줄 자르기 추가 스타일 */
    white-space: normal;
    line-height: 1.2;
    height: 2.2em;
    text-align: left;
    word-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
</style>
