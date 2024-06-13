<template>
 <Header></Header>
    <nav id="wrapper">
        <router-link to="/">Home</router-link> | <router-link to="/about">About</router-link> |
        <router-link to="/social/detail">Detail</router-link>
    </nav>

    <router-view />
    <Footer id="footer"></Footer>
</template>
<script setup>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
</script>
<script></script>

<style>
@import url("https://cdn.rawgit.com/moonspam/NanumSquare/master/nanumsquare.css");


#app {
    font-family: "NanumSquare", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}


</style>
