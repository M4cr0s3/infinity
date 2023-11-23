<script setup>
import {BASE_API_URL} from "../../API_URL.js";

const {id, image_path, title, content} = defineProps({
    id: {
        type: Number,
        required: true,
    },
    image_path: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
})

</script>

<template>
    <div class="advantage" :class="id % 2 !== 0 ? '' : 'flex-row-reverse'">
        <div class="flex flex-col advantage__item">
            <h1 class="title">
                {{ title }}
            </h1>
            <h3 class="content">
                {{ content }}
            </h3>
        </div>
        <div class="w-full advantage__img flex" :class="id % 2 === 0 ? 'justify-start' : 'justify-end'">
            <img :src="BASE_API_URL+image_path" alt="">
        </div>
    </div>
</template>

<style scoped>

</style>