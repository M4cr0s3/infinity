<script setup>

import UButton from "@/components/global/UButton.vue";
import {router} from "@/router";
import {transformDate} from "@/utils/useDate";

const {id, title, description, start_at, duration, profession} = defineProps({
    id: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    start_at: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    profession: {
        type: Object,
        required: true
    }
})



const handleClick = (id) => {
    router.push(`course/${id}`)
}

</script>

<template>
    <RouterLink :to="'course'+'/'+id">
        <div class="ml-4 mr-2 mb-3 p-4 h-80 flex flex-col justify-between">
            <div class="flex flex-col">
                <div class="flex gap-3 mb-10 items-center">
                    <div class="font-JB font-extrabold">
                        {{ profession.title }}
                    </div>
                    <div class="bg-main text-white rounded px-2 py-1">
                        {{ transformDate(start_at) }}
                    </div>
                    <div class="bg-main text-white rounded px-2 py-1">
                        {{ duration + ' месяца' }}
                    </div>
                </div>
                <div class="">
                    <h3 class="text-xl font-Ml font-extrabold text-main">
                        {{ title }}
                    </h3>
                    <p class="text-primary text-sm mt-1 font-Ml">{{ description }}</p>
                </div>
            </div>

            <UButton @click.prevent="handleClick(id)" class="px-10 font-Ml font-medium block self-start">
                Подробнее
            </UButton>
        </div>
    </RouterLink>
</template>

<style scoped>

</style>