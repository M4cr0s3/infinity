<script setup>

import MentorList from "@/components/MentorList.vue";
import {useMentorStore} from "@/stores/mentorsStore";
import {onMounted} from "vue";
import Navbar from "@/components/global/Navbar.vue";
import Footer from "@/components/Footer.vue";
import {useUserStore} from "@/stores/user";

const mentorStore = useMentorStore()
const userStore = useUserStore()

const {user, logout} = userStore

onMounted(() => {
    mentorStore.getMentors()
})

</script>

<template>
    <Navbar :user="user" :logout="logout"/>
    <section class="mt-12 mx-auto px-4 max-w-screen-xl md:px-8">
        <div class="text-center">
            <h1 class="text-3xl font-JB text-main font-bold">
                Наши менторы
            </h1>
            <p class="mt-3 text-primary font-Ml">
                Люди, старающиеся специально для Вас и ради Ваших знаний.
            </p>
        </div>
        <MentorList :mentors="mentorStore.mentors"/>
    </section>
    <Footer/>


</template>

<style scoped>

</style>