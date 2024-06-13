<template>
    <Header />
    <router-view />
    <Footer />
</template>

<script setup>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
</script>

<style>
@import url("https://cdn.rawgit.com/moonspam/NanumSquare/master/nanumsquare.css");

#app {
    font-family: "NanumSquare", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
</style>
