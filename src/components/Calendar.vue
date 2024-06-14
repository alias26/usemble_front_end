<template>
    <div id="custom-calendar">
        <vc-date-picker
            color="white"
            v-model="today"
            mode="dateTime"
            is-required
            :initial-page="{ month: month, year: year }"
        ></vc-date-picker>
    </div>
</template>

<script setup>
// import { ref } from "vue";
import "v-calendar/style.css";

let today = new Date();
let month = today.getMonth() + 1;
let year = today.getFullYear();
</script>

<style>
.vc-day {
    font-weight: bold;
    color: black;
}

.vc-container {
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 20px;
}
.vc-container .vc-weekday-1,
.vc-container .vc-weekday-7 {
    color: red;
}

.vc-title span {
    background-color: #fff;
}
.vc-title {
    background-color: #fff;
}
.vc-arrow {
    background-color: #fff;
}
.vc-highlights {
    background-color: #558ccf;
    border-radius: 50%;
}
.vc-time-header {
    margin-top: 8px;
}
.vc-time-header span {
    font-size: 20px;
}
.vc-time-select-group {
    display: none;
}
</style>
