<template>
    <div class="editor" id="editor"></div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import Quill from "quill";

defineExpose({ getContent });

const props = defineProps(["content"]);
const quill = ref(null);

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
    quill.value = new Quill("#editor", {
        placeholder: "내용을 작성해주세요.",
        theme: "snow",
        modules: {
            toolbar: [
                [{ header: [1, 2, 3, false] }],
                ["bold", "underline"],
                [{ color: ["black", "grey", "#558CCF"] }, { background: ["#EEF1F4"] }],
                ["image", "link"],
                ["clean"],
            ],
        },
    });

    if (props.content != null) {
        document.querySelector(".ql-editor").innerHTML = props.content;
    }
}

function getContent() {
    return document.getElementById("editor").querySelector(".ql-editor");
}
</script>

<style scoped>
.editor {
    height: 400px;
}
</style>
