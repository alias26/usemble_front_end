<template>
    <div class="CalendarWrite">
        <vc-date-picker
            v-model="today"
            mode="dateTime"
            expanded
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
.CalendarWrite .vc-day {
    font-weight: bold;
    color: black;
}
.CalendarWrite .vc-container .vc-weekday-1,
.CalendarWrite .vc-container .vc-weekday-7 {
    color: red;
}

.CalendarWrite .vc-title span {
    background-color: #fff;
}
.CalendarWrite .vc-title {
    background-color: #fff;
}
.CalendarWrite .vc-arrow {
    background-color: #fff;
}
.CalendarWrite .vc-time-header {
    margin-top: 8px;
}
.CalendarWrite .vc-time-header span {
    font-size: 20px;
    margin-bottom: 8px;
}
.CalendarWrite .vc-time-select-group {
    background-color: #fff;
    font-size: 30px;
}
</style>
