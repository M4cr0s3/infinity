<script setup>

import {useUserStore} from "@/stores/user";
import {Icon} from '@iconify/vue';
import {BASE_API_URL} from "../../API_URL";
import {onMounted, ref} from "vue";
import Navbar from "@/components/global/Navbar.vue";
import {router} from "@/router";

const userStore = useUserStore()

onMounted(() => {
    userStore.getLastTasks()
})

const {user} = userStore

const signature = (user) => {
    switch (user?.profession?.title) {
        case 'Frontend':
            return `<${user.profession.title} Dev />`
        case 'Backend':
            return `$${user.profession.title} Dev;`
    }
}

const test = () => {
    router.push('/test')
}

const lastTasks = user?.tasks?.splice(user?.tasks.length - 5, user?.tasks.length).reverse()

</script>

<template>
    <div class="min-h-[100vh] bg-main flex flex-col">
        <Navbar :user="user" :logout="userStore.logout"/>

        <div class="mt-10">
            <div class="container mx-auto my-5 py-5">
                <div class="md:flex no-wrap md:-mx-2 ">
                    <!-- Left Side -->
                    <div class="w-full md:w-3/12 md:mx-2">
                        <!-- Profile Card -->
                        <div class="bg-white p-5 border-t-4 shadowed">
                            <div class="image overflow-hidden">
                                <img class="h-auto w-full mx-auto rounded"
                                     :src="BASE_API_URL+user.image_path"
                                     alt="">
                            </div>
                            <h1 class="text-primary font-extrabold text-xl leading-8 mt-1 font-Ml">
                                {{ `${user.name} ${user.surname}` }}</h1>
                            <h3 class="font-extrabold font-Ml leading-normal mb-1 text-main">{{ signature(user) }}</h3>
                            <p class="text-sm text-gray-500 leading-6 font-Ml"> {{ user.about }} </p>
                        </div>
                        <!-- End of profile card -->
                        <div class="my-4"></div>
                        <!-- End of friends card -->
                    </div>
                    <!-- Right Side -->
                    <div class="w-full md:w-9/12 md:mx-2 h-64">
                        <!-- Profile tab -->
                        <!-- About Section -->
                        <div class="bg-white p-8 shadowed rounded-sm">
                            <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                                <span class="tracking-wide">Обо мне</span>
                            </div>
                            <div class="text-gray-700">
                                <div class="grid md:grid-cols-2 text-sm">
                                    <div class="grid grid-cols-2">
                                        <div class="px-0 py-2 font-Ml font-semibold">Имя</div>
                                        <div class="px-0 py-2 font-Ml">{{ user.name }}</div>
                                    </div>
                                    <div class="grid grid-cols-2">
                                        <div class="px-0 py-2 font-Ml font-semibold">Фамилия</div>
                                        <div class="px-0 py-2 font-Ml">{{ user.surname }}</div>
                                    </div>
                                    <div class="grid grid-cols-2">
                                        <div class="px-0 py-2 font-Ml font-semibold">Пол</div>
                                        <div class="px-0 py-2 font-Ml">{{ user?.gender?.title }}</div>
                                    </div>
                                    <div class="grid grid-cols-2">
                                        <div class="px-0 py-2 font-Ml font-Ml font-semibold">Email</div>
                                        <div class="px-0 py-2 font-Ml">
                                            <a class="text-blue-800" href="mailto:jane@example.com"
                                               target="_blank">{{ user.email }}</a>
                                        </div>
                                    </div>
                                    <div class="grid grid-cols-2">
                                        <div class="px-0 py-2 font-Ml font-semibold">Дата рождения</div>
                                        <div class="px-0 py-2 font-Ml">Фев 06, 1998</div>
                                    </div>
                                </div>
                            </div>
                            <button
                                class="block btn w-full text-sm font-extrabold text-white font-Ml rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 p-3 my-4">
                                Посмотреть полную информацию
                            </button>
                            <button
                                @click.prevent="test"
                                class="block btn w-full text-sm font-extrabold text-white font-Ml rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 p-3 my-4">
                                TEST
                            </button>
                        </div>
                        <!-- End of about section -->

                        <div class="my-4"></div>

                        <!-- Experience and education -->
                        <div class="bg-white px-8 py-8 shadowed">

                            <div class="grid grid-cols-2">
                                <div class="pr-5">
                                    <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                <span clas="text-green-500">
                                    <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                    </svg>
                                </span>
                                        <span class="tracking-wide">Задачи</span>
                                    </div>
                                    <ul class="list-inside space-y-2">
                                        <li v-for="task in lastTasks" class="mb-4">
                                            <div class="text-main font-extrabold font-JB">{{ task.title }}</div>
                                            <div class="text-gray-500 text-xs">{{ task.description }}</div>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                <span clas="text-green-500">
                                    <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         stroke="currentColor">
                                        <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                        <path fill="#fff"
                                              d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
                                    </svg>
                                </span>
                                        <span class="tracking-wide">Направление</span>
                                    </div>
                                    <ul class="list-inside space-y-2">
                                        <li>
                                            <div class="text-main font-Ml font-extrabold">{{ signature(user) }}</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped>
.shadowed {
    border-radius: 10px;
    box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.35);
}


.btn {
    background: linear-gradient(93deg, #4529EE 0.31%, #6129D3 66.64%, #6114d5 96.47%);
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.35);
}

.bg-main {
    background: linear-gradient(93deg, #4529EE 0.31%, #6129D3 66.64%, #6114d5 96.47%);
}

@media screen and (max-width: 780px) {
    .bg-main {
        min-height: 155vh;
    }
}

@media screen and (max-width: 560px) {
    .bg-main {
        min-height: 145vh;
    }
}

@media screen and (max-width: 480px) {
    .bg-main {
        min-height: 155vh;
    }

}
</style>