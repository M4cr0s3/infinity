<script setup>

import MentorItem from "@/components/MentorItem.vue";

const {mentors} = defineProps({
    mentors: {
        type: Array,
        required: true
    }
})

console.log(mentors)

</script>

<template>
    <div class="mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        <article class="max-w-md mx-auto mt-4 border rounded-md shadowed duration-300 hover:shadow-sm"
                 v-for="mentor in mentors" :key="mentor.id">
            <MentorItem :id="mentors.id" :name="mentor.name" :surname="mentor.surname" :profession="mentor.profession"
                        :image_path="mentor.image_path" :description="mentor.description"/>
        </article>
    </div>

</template>

<style scoped>
    .shadowed {
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    }
</style>