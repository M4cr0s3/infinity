<script setup>
import CourseItem from "@/components/CourseItem.vue";

const {courses} = defineProps({
    courses: {
        type: Array,
        required: true
    }
})
</script>

<template>
    <div class="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        <article
            class="max-w-md mx-auto mt-4 border rounded-md shadowed duration-300 hover:shadow-sm"
            v-for="course in courses" :key="course.id">
            <CourseItem :id="course.id"
                        :title="course.title"
                        :profession="course.profession"
                        :duration="course.duration"
                        :start_at="course.start_at"
                        :description="course.description"
            />
        </article>
    </div>
</template>

<style scoped>
    .shadowed {
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    }
</style>