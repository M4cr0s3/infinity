<script setup>

import {BASE_API_URL} from "../../API_URL";

const {id, name, surname, image_path, description, profession} = defineProps({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    image_path: {
        type: String,
        required: true
    },
    profession: {
        type: Object,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

</script>

<template>
    <a href="#">
        <img :src="BASE_API_URL+image_path" alt="" class="w-full h-60 rounded-t-md object-cover"/>
        <div class="pt-3 ml-4 mr-2 mb-3">
            <h3 class="text-xl font-Ml font-extrabold text-main">
                {{ name }} {{ surname }}
            </h3>
            <h4 class="font-JB text-sm">{{ profession.title }}</h4>
            <p class="text-gray-400 text-sm mt-1">{{ description }}</p>
        </div>
    </a>
</template>

<style scoped>

</style>