<template>
    <Header v-if="!$route.path.startsWith('/admin')" />
    <div id="wrap"><router-view /></div>

    <Footer v-if="!$route.path.startsWith('/admin')" />
</template>

<script setup>
import Header from "@/components/Common/Header.vue";
import Footer from "@/components/Common/Footer.vue";
</script>

<style>
@import url("https://cdn.rawgit.com/moonspam/NanumSquare/master/nanumsquare.css");

#app {
    font-family: "NanumSquare", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    /* ------------------- */
    display: flex;
    flex-direction: column;
    min-height: 100vh; /* viewport의 전체 높이를 차지 */
}
#wrap {
    padding-bottom: 150px;
}
</style>
