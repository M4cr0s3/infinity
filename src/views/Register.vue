<script setup>
import {reactive} from "vue";
import UInput from "@/components/global/UInput.vue";
import UButton from "@/components/global/UButton.vue";
import {useUserStore} from "@/stores/user";
import {useRouter} from "vue-router";

const formData = reactive({
    email: '',
    name: '',
    surname: '',
    password: '',
    password_confirmation: '',
})

const userStore = useUserStore()
const router = useRouter()

const handleSubmit = () => {
    userStore.register(formData.email, formData.name, formData.surname,
        formData.password, formData.password_confirmation)

}

</script>

<template>
    <div class="wrapper">
        <div @click="router.go(-1)" class="back cursor-pointer absolute rotate-180 top-10 left-10">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#4529EE" class="w-12 h-12">
                <path fill-rule="evenodd"
                      d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                      clip-rule="evenodd"></path>
            </svg>
        </div>
        <div class="row">
            <div class="form">
                <div class="form__title">
                    Твоя лучшая работа начинается здесь
                </div>
                <hr class="mt-4 border-gray-400">
                <form @submit.prevent="handleSubmit" class="flex flex-col">
                    <UInput type="email" placeholder="Email" label="Введите свой Email" v-model="formData.email"/>
                    <UInput type="text" placeholder="Имя" label="Введите свое имя" v-model="formData.name"/>
                    <UInput type="text" placeholder="Фамилия" label="Введите свою фамилию" v-model="formData.surname"/>
                    <UInput type="password" placeholder="Пароль" label="Придумайте пароль" v-model="formData.password"/>
                    <UInput type="password" placeholder="Подтверждение пароля" label="Подтвердите пароль"
                            v-model="formData.password_confirmation"/>
                    <div class="flex items-start mt-6">
                        <input id="default-checkbox" type="checkbox" value="" class="checkbox w-6 h-6">
                        <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-600 font-Ml">
                            Регистрируясь, вы создаете учетную запись INFINITY и соглашаетесь с <span
                            class="font-bold text-main">Условиями использования</span>
                            и <span class="font-bold text-main">Политикой конфиденциальности</span>.
                        </label>
                    </div>
                    <UButton>
                        Зарегистрироваться
                    </UButton>
                </form>
                <div class="mt-6 font-Ml text-gray-600 font-light">Уже зарегистрированы?
                    <RouterLink to="/login" class="text-main font-bold font-JB">
                        Авторизуйтесь!
                    </RouterLink>
                </div>
            </div>
            <div class="explore bg-main">
                <RouterLink to="/" class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="34" viewBox="0 0 64 34" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M59.5517 8.86919C60.9998 10.2735 62.122 11.9126 62.8868 13.7404V13.7382C63.6244 15.5024 63.9977 17.3654 63.9977 19.2766C63.9977 21.1878 63.6244 23.0507 62.8868 24.8149C62.122 26.6427 60.9998 28.2818 59.5517 29.6861C58.1037 31.0904 56.4135 32.1788 54.5287 32.9204C52.7096 33.6358 50.7887 33.9978 48.8179 33.9978C46.8472 33.9978 44.9263 33.6358 43.1071 32.9204C41.2224 32.1788 39.5322 31.0904 38.0841 29.6861L35.6767 27.3514L35.6817 27.3465L26.887 18.8175L26.882 18.8224L21.2594 13.3696C17.9062 10.1177 12.4511 10.1177 9.09793 13.3696C5.74475 16.6215 5.74475 21.9119 9.09793 25.1637C12.4511 28.4156 17.9062 28.4156 21.2594 25.1637L26.0829 20.486L30.7371 24.9996L25.9136 29.6773C24.4655 31.0817 22.7754 32.17 20.8906 32.9117C19.0715 33.627 17.1505 33.989 15.1798 33.989C13.2091 33.989 11.2881 33.627 9.469 32.9117C7.58425 32.17 5.89408 31.0817 4.44602 29.6773C2.99795 28.273 1.8757 26.6339 1.11094 24.8061C0.37333 23.0419 0 21.179 0 19.2678C0 17.3566 0.37333 15.4937 1.11094 13.7295C1.8757 11.9017 2.99795 10.2625 4.44602 8.85822C5.89408 7.4539 7.58425 6.36555 9.469 5.62389C11.2881 4.90856 13.2091 4.54651 15.1798 4.54651C17.1505 4.54651 19.0715 4.90856 20.8906 5.62389C22.7754 6.36555 24.4655 7.4539 25.9136 8.85822L42.7383 25.1769C46.0915 28.4288 51.5466 28.4288 54.8998 25.1769C58.253 21.925 58.253 16.6347 54.8998 13.3828C51.5466 10.1309 46.0915 10.1309 42.7383 13.3828L42.727 13.3718L37.8873 18.0653L33.2331 13.5517L38.0728 8.85822L38.0841 8.86919C39.5322 7.46487 41.2224 6.37652 43.1071 5.63486C44.9263 4.91953 46.8472 4.55748 48.8179 4.55748C50.7887 4.55748 52.7096 4.91953 54.5287 5.63486C56.4135 6.37652 58.1037 7.46487 59.5517 8.86919Z"
                              fill="white"/>
                    </svg>
                    <span class="logo__text">INFINITY</span>
                </RouterLink>
                <div class="explore__title">
                    Изучайте и получайте опыт от ведущих менторов IT-сферы.
                </div>
                <div class="explore__desc mt-4">
                    INFINITY, ведущая IT-компания в сфере обучения, уже подготовила огромное количество
                    высококвалифицированных разработчиков с помощью своих инновационных IT-курсов. Благодаря фокусу на
                    передовых технологиях и эффективным методам обучения.
                </div>
                <div class="explore__info items-center">
                    <div class="explore__imgs pr-5 flex">
                        <img class="explore__img"
                             src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                             alt="">
                        <img class="explore__img" src="../assets/images/jese-leos.png" alt="">
                        <img class="explore__img"
                             src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
                             alt="">
                        <img class="explore__img"
                             src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/thomas-lean.png" alt="">
                    </div>
                    <div class="h-1/2 bg-white bg-opacity-30 w-[1px]"></div>
                    <div class="explore__desc pl-5 capitalize">
                        Более <span class="font-bold">15.7к</span> счастливых выпускников
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>

<style scoped>
.checkbox {
    border-radius: 10px;
}

.form__title {
    font-size: clamp(0.75rem, 0.55rem + 1vw, 1.75rem);
    @apply uppercase font-JB font-extrabold
}

.logo__text {
    font-size: clamp(0.75rem, 0.6rem + 0.75vw, 1.5rem);
}

.explore__title {
    font-size: clamp(1.5rem, 1.2rem + 1.5vw, 3rem);
    @apply text-white font-Ml font-extrabold mt-4 leading-[3rem]
}

.explore__desc {
    font-size: clamp(0.5625rem, 0.45rem + 0.5625vw, 1.125rem);
    @apply font-Ml font-light text-white
}

.explore__info {
    @apply mt-8 flex
}

.explore__img {
    border-radius: 50%;
    object-fit: cover;
    display: block;
    border: 2px solid white;
    width: 2.5rem;
    height: 2.5rem;
}


.form {
    @apply w-1/2 p-16 flex flex-col justify-center
}

.explore {
    @apply w-1/2 flex px-14 flex-col justify-center
}

.wrapper {
    @apply min-h-screen
}

.row {
    @apply flex flex-wrap h-screen
}

.logo__text {
    @apply text-white ml-2
}

@media screen and (max-width: 1170px) {
    .explore {
        width: 100%;
        @apply py-8
    }

    .back {
        display: none;
    }

    .form {
        width: 100%;
    }
}

@media screen and (max-width: 780px) {
    .explore {
        @apply px-8
    }
}
</style>