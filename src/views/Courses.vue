<script setup>
import Navbar from "@/components/global/Navbar.vue";
import {useUserStore} from "@/stores/user";
import Footer from "@/components/Footer.vue";
import CourseList from "@/components/CourseList.vue";
import {useCoursesStore} from "@/stores/coursesStore";
import {onMounted, ref} from "vue";
import UButton from "@/components/global/UButton.vue";

const userStore = useUserStore()
const coursesStore = useCoursesStore()

const {user, logout} = userStore

const mine = ref(false)

const filterCourses = async (id) => {
    mine.value = !mine.value;

    if (mine.value && coursesStore.usersCourses.length === 0) {
        await coursesStore.getUsersCourses(id);
    }
}

onMounted(() => {
    coursesStore.getCourses()
})

</script>

<template>
    <Navbar :user="user" :logout="logout"/>
    <section class="mt-12 mx-auto px-4 max-w-screen-xl md:px-8">
        <div class="text-start flex items-center justify-between">
            <h1 class="text-3xl font-JB text-main font-bold uppercase">
                курсы
            </h1>
            <div v-if="user.id">
                <UButton @click.prevent="filterCourses(user.id)" class="px-10 font-Ml font-medium block self-start">
                    <div v-if="mine">Все курсы</div>
                    <div v-else>Мои курсы</div>
                </UButton>
            </div>
        </div>
        <div v-if="coursesStore.courses && !mine">
            <CourseList :courses="coursesStore.courses"/>
        </div>
        <div v-if="coursesStore.usersCourses && mine">
            <CourseList :courses="coursesStore.usersCourses"/>
        </div>

    </section>

    <Footer/>
</template>

<style scoped>

</style>