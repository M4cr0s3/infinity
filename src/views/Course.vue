<script setup>

import {useCoursesStore} from "@/stores/coursesStore";
import {onMounted} from "vue";
import Navbar from "@/components/global/Navbar.vue";
import Footer from "@/components/Footer.vue";
import UButton from "@/components/global/UButton.vue";
import {transformDate} from "@/utils/useDate";
import {BASE_API_URL} from "../../API_URL";
import {useUserStore} from "@/stores/user";
import {router} from "@/router";

const {id} = defineProps({
    id: {
        type: String || Number,
        required: true
    }
})

const userStore = useUserStore()
const courseStore = useCoursesStore()

const handleSign = (id, user) => {
    if (userStore.user.id !== null) {
        courseStore.signOnCourse(id, user.id)
    } else {
        router.push('/login')
    }
}


onMounted(() => {
    courseStore.getCourse(id)
    if (userStore.user.id) courseStore.checkIsUserOnCourse(id, userStore.user.id)
})

</script>

<template>
    <div class="background">
        <Navbar :user="userStore.user" :logout="userStore.logout"/>
        <div class="wrapper">
            <div class="container w-full h-[100%] flex justify-center flex-col">
                <div class="title text-primary">{{ courseStore.course?.title }}</div>
                <div class="content">{{ courseStore.course?.description }}</div>
                <div v-if="!courseStore.errors">
                    <UButton @click.prevent="handleSign(id, userStore.user)" class="block self-start px-10 font-Ml font-bold">Записаться на курс</UButton>
                </div>
                <div v-else>
                    <h3 class="text-main font-bold text-xl mt-2">Вы зарегистрировались на данный курс.</h3>
                </div>

            </div>
        </div>
    </div>
    <div class="container">
        <div class="mt-6 grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1">
            <div class="flex flex-col max-sm:mb-4 max-md:mb-3">
                <h3 class="text-3xl font-JB text-main font-extrabold mb-2">Начало</h3>
                <span class="font-Ml font-light">{{ transformDate(courseStore.course.start_at) }}</span>
            </div>
            <div class="flex flex-col max-sm:mb-4 max-md:mb-3">
                <h3 class="text-3xl font-JB text-main font-extrabold mb-2">Стоимость</h3>
                <span class="font-Ml font-light">
                    {{ courseStore.course.price+'₽' }}
                </span>
            </div>
            <div class="flex flex-col max-sm:mb-4 max-md:mb-3">
                <h3 class="text-3xl font-JB text-main font-extrabold mb-2">Длительность</h3>
                <span class="font-Ml font-light">
                    {{ courseStore.course.duration }}
                </span>
            </div>
            <div class="flex flex-col max-sm:mb-4 max-md:mb-3">
                <h3 class="text-3xl font-JB text-main font-extrabold mb-2">График</h3>
                <span class="font-Ml font-light">
                    {{ courseStore.course.schedule }}
                </span>
            </div>
        </div>
        <div class="mt-12">
            <h1 class="title uppercase">О курсе</h1>
            <div class="mt-1">
                {{ courseStore.course.about }}
            </div>
            <div class="flex flex-col mt-3">
                <span class="text-xl font-bold">Требования:</span>
                {{ courseStore.course.requirements }}
            </div>
        </div>
        <div class="mt-12">
            <h1 class="title uppercase">Содержание курса</h1>
            <div class="mt-1">
                {{ courseStore.course.about }}
            </div>
            <div class="flex mt-3 border-b-2 border-main items-center mb-6 py-3" v-for="(content, i) in courseStore.course.contents"
                 :key="content.id">
                <span class="text-main font-JB text-2xl font-bold mr-5">
                    {{ '0' + (i + 1) + '.' }}
                </span>
                <div class="flex flex-col">
                    <div class="text-2xl font-bold font-Ml">{{ content.title }}</div>
                    <div class="text-xl font-light">
                        {{ content.description }}
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-12">
            <h1 class="title uppercase">Менторы</h1>
            <div class="content">
                Курс ведут специалисты IT-компаний. Они объяснят теорию простым языком. Помогут освоить необходимые
                навыки и технологии, которые сами используют в работе ежедневно. Дадут совет, как развиваться в новой
                профессии новичку и успешно пройти собеседование.
            </div>
            <div class="mt-12 gap-2 flex justify-around">
                <div class="max-w-md mx-auto mt-4 border rounded-md shadowed duration-300 hover:shadow-sm" v-for="mentor in courseStore.course.mentors"
                     :key="mentor.id">
                    <a href="#">
                        <img :src="BASE_API_URL+mentor.image_path" alt="" class="w-full h-60 rounded-t-md object-cover"/>
                        <div class="pt-3 ml-4 mr-2 mb-3">
                            <h3 class="text-xl font-Ml font-extrabold text-main">
                                {{ mentor.name }} {{ mentor.surname }}
                            </h3>
                            <h4 class="font-JB text-sm mt-1">{{ mentor.profession.title+' разработчик' }}</h4>
                            <p class="text-gray-400 text-sm mt-1">{{ mentor.description }}</p>
                        </div>
                    </a>
                </div>
            </div>

        </div>
    </div>
    <Footer/>
</template>

<style scoped>
.title {
    font-size: clamp(2rem, 1.6rem + 2vw, 4rem);
}

.content {
    @apply text-start
}

.background {
    min-height: 50vh;
    mix-blend-mode: soft-light;
    background-image: url('@/assets/images/nice1.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
}

.wrapper {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    overflow: hidden;
}
</style>