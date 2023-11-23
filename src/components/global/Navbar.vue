<script setup>
import {BASE_API_URL} from "../../../API_URL";
import {computed, ref} from "vue";
import {useRoute} from "vue-router";


const {user, logout} = defineProps({
    user: {
        type: Object,
    },
    logout: {
        type: Function
    }
})


const route = useRoute()
const currentRouteName = computed(() => route.name)


const show = ref(false)

const showOn = () => {
    return show.value = !show.value
}

</script>

<template>
    <div class="w-full text-white bg-main z-50 relative">
        <div
            class="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between py-2 md:flex-row md:px-6 lg:px-8">
            <RouterLink to="/" class="flex items-center max-md:self-center max-md:py-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="34" viewBox="0 0 64 34" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M59.5517 8.86919C60.9998 10.2735 62.122 11.9126 62.8868 13.7404V13.7382C63.6244 15.5024 63.9977 17.3654 63.9977 19.2766C63.9977 21.1878 63.6244 23.0507 62.8868 24.8149C62.122 26.6427 60.9998 28.2818 59.5517 29.6861C58.1037 31.0904 56.4135 32.1788 54.5287 32.9204C52.7096 33.6358 50.7887 33.9978 48.8179 33.9978C46.8472 33.9978 44.9263 33.6358 43.1071 32.9204C41.2224 32.1788 39.5322 31.0904 38.0841 29.6861L35.6767 27.3514L35.6817 27.3465L26.887 18.8175L26.882 18.8224L21.2594 13.3696C17.9062 10.1177 12.4511 10.1177 9.09793 13.3696C5.74475 16.6215 5.74475 21.9119 9.09793 25.1637C12.4511 28.4156 17.9062 28.4156 21.2594 25.1637L26.0829 20.486L30.7371 24.9996L25.9136 29.6773C24.4655 31.0817 22.7754 32.17 20.8906 32.9117C19.0715 33.627 17.1505 33.989 15.1798 33.989C13.2091 33.989 11.2881 33.627 9.469 32.9117C7.58425 32.17 5.89408 31.0817 4.44602 29.6773C2.99795 28.273 1.8757 26.6339 1.11094 24.8061C0.37333 23.0419 0 21.179 0 19.2678C0 17.3566 0.37333 15.4937 1.11094 13.7295C1.8757 11.9017 2.99795 10.2625 4.44602 8.85822C5.89408 7.4539 7.58425 6.36555 9.469 5.62389C11.2881 4.90856 13.2091 4.54651 15.1798 4.54651C17.1505 4.54651 19.0715 4.90856 20.8906 5.62389C22.7754 6.36555 24.4655 7.4539 25.9136 8.85822L42.7383 25.1769C46.0915 28.4288 51.5466 28.4288 54.8998 25.1769C58.253 21.925 58.253 16.6347 54.8998 13.3828C51.5466 10.1309 46.0915 10.1309 42.7383 13.3828L42.727 13.3718L37.8873 18.0653L33.2331 13.5517L38.0728 8.85822L38.0841 8.86919C39.5322 7.46487 41.2224 6.37652 43.1071 5.63486C44.9263 4.91953 46.8472 4.55748 48.8179 4.55748C50.7887 4.55748 52.7096 4.91953 54.5287 5.63486C56.4135 6.37652 58.1037 7.46487 59.5517 8.86919Z"
                          fill="white"/>
                </svg>
                <span class="logo__text">INFINITY</span>
            </RouterLink>
            <nav
                class="flex-col flex-grow pb-4 md:pb-0 hidden md:flex md:justify-end md:flex-row">
                <div class="relative">
                    <button
                        v-if="user?.id"
                        @click.prevent="showOn"
                        class="flex flex-row items-center space-x-2 w-full px-4 py-2 mt-2 text-sm font-semibold
                                 hover:bg-blue-800 md:w-auto md:inline md:mt-0 md:ml-4">
                        <span class="font-Ml font-bold">{{ user?.name + " " + user?.surname }}</span>
                        <img class="inline h-6 rounded-full"
                             :src="BASE_API_URL+user?.image_path">
                    </button>
                    <div class="flex gap-6 items-center" v-else>
                        <div class="">
                            <RouterLink to="/" class="text-sm font-Ml font-bold">Главная</RouterLink>
                        </div>

                        <div class="" v-if="currentRouteName !== 'courses'">
                            <RouterLink to="/courses" class="text-sm font-Ml font-bold">Курсы</RouterLink>
                        </div>
                        <div class="" v-if="currentRouteName !== 'mentors'">
                            <RouterLink to="/mentors" class="text-sm font-Ml font-bold">Менторы</RouterLink>
                        </div>
                        <div class="">
                            <RouterLink to="/login" class="text-sm font-Ml font-bold">Войти</RouterLink>
                        </div>

                    </div>
                    <div v-if="show">
                        <div
                            class="py-2 absolute top-10 right-8 bg-white text-blue-800 text-sm rounded-xl border border-main-color shadowed">
                            <RouterLink to="/courses"
                                        class="block cursor-pointer px-4 py-2 mt-2 text-sm bg-white md:mt-0 text-main font-bold font-Ml"
                            >Курсы
                            </RouterLink>
                            <RouterLink to="/mentors"
                                        class="block cursor-pointer px-4 py-2 mt-2 text-sm bg-white md:mt-0 text-main font-bold font-Ml"
                            >Менторы
                            </RouterLink>
                            <RouterLink to="/profile"
                                        class="block cursor-pointer px-4 py-2 mt-2 text-sm bg-white md:mt-0 text-main font-bold font-Ml"
                            >Профиль
                            </RouterLink>
                            <RouterLink to="/"
                                        class="block cursor-pointer px-4 py-2 mt-2 text-sm bg-white md:mt-0 text-main font-bold font-Ml"
                            >Главная
                            </RouterLink>
                            <a @click.prevent="logout"
                               class="block cursor-pointer px-4 py-2 mt-2 text-sm bg-white md:mt-0 text-main font-bold font-Ml">Выйти
                            </a>
                        </div>
                    </div>


                </div>
            </nav>
        </div>
    </div>
</template>

<style scoped>
.logo__text {
    @apply text-white ml-2
}
</style>