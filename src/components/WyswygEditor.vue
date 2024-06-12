<template>
    <div class="editor" id="editor"></div>
</template>

<script setup>
import { onMounted } from "vue";
import Quill from "quill";

onMounted(() => {
    if (!window.Quill) {
        loadScript();
    } else {
        loadEditor();
    }
});

function loadScript() {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/quill@2.0.2/dist/quill.js";
    document.head.appendChild(script);

    const link = document.createElement("link");
    link.href = "https://cdn.jsdelivr.net/npm/quill@2.0.2/dist/quill.snow.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    script.onload = () => {
        loadEditor();
    };
}

function loadEditor() {
    const quill = new Quill("#editor", {
        placeholder: "어셈블에 대한 설명을 추가해주세요.",
        theme: "snow",
        modules: {
            toolbar: [
                [{ header: [1, 2, 3, false] }],
                ["bold", "underline", { color: ["black", "grey", "#558CCF"] }],
                ["image", "link"],
                ["clean"],
            ],
        },
    });
}
</script>

<style scoped>
.editor {
    height: 400px;
}
</style>
