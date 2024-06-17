<template>
    <div class="d-flex justify-content-center">
        <div id="admintab"><AdminTab></AdminTab></div>
        <div id="admincontent"><RouterView /></div>
    </div>
</template>
<script setup>
import AdminTab from "./AdminTab.vue";
</script>

<style scoped>
#admintab {
    width: 20%;
    border: solid;
}
#admincontent {
    width: 70%;
    border: solid;
}
</style>
