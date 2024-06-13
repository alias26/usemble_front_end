<template>
    <FullCalendar :options="calendarOptions" />
</template>

<script>
import { ref } from "vue";
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

export default {
    name: "Calendar",
    components: {
        FullCalendar,
    },
    setup() {
        const calendarOptions = ref({
            plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
            initialView: "dayGridMonth",
            editable: true,
            selectable: true,
            events: [
                { title: "Event 1", date: "2024-06-01" },
                { title: "Event 2", date: "2024-06-02" },
            ],
            dateClick: function (info) {
                alert("Clicked on: " + info.dateStr);
            },
            eventClick: function (info) {
                alert("Event: " + info.event.title);
            },
        });

        return {
            calendarOptions,
        };
    },
};
</script>
<style scoped></style>
