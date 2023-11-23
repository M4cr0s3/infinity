<script setup>

import {computed, watch} from "vue";


const {stats = {}} = defineProps({
    stats: {
        type: Object,
        required: true
    }
})
const tasks = (tasks) => {
    if (tasks) {
        if (tasks % 10 === 1) {
            return 'Задание';
        } else if (tasks % 10 === 2 || tasks % 10 === 3 || tasks % 10 === 4) {
            return 'Задания';
        } else if (tasks % 10 === 5 || tasks % 10 === 6 ||
            tasks % 10 === 7 || tasks % 10 === 8 || tasks % 10 === 9) {
            return 'Заданий';
        }
    }
}

const users = (users) => {
    if (users) {
        if (users % 10 === 0 || users % 10 === 5 || users % 10 === 6 || users % 10 === 7 || users % 10 === 8 || users % 10 === 9) {
            return 'Пользователей';
        } else if (users % 10 === 1) {
            return 'Пользователь';
        } else if (users % 10 === 2 || users % 10 === 3 || users % 10 === 4) {
            return 'Пользователя';
        }
    }
}

const challenges = (challenges) => {
    if (challenges) {
        if (challenges % 10 === 1) {
            return 'испытание';
        } else if (challenges % 10 === 2 || challenges % 10 === 3 || challenges % 10 === 4) {
            return 'испытания';
        } else if (challenges % 10 === 5 || challenges % 10 === 6 ||
            challenges % 10 === 7 || challenges % 10 === 8 || challenges % 10 === 9) {
            return 'испытаний';
        }
    }
}

</script>

<template>
    <div class="stats__section py-11 mt-10">
        <div class="container">
            <div class="flex px-32 justify-between stat__row">
                <div class="stat__item flex flex-col items-center">
                    <div class="stat__img">
                        <img src="../assets/images/stat1.png" alt="">
                    </div>
                    <div class="stat__stat">
                        {{ stats.count_tasks }}
                    </div>
                    <div class="stat__desc">
                        {{ tasks(stats.count_tasks) + ' и ' + challenges(stats.count_tasks) }}
                    </div>
                </div>
                <div class="stat__item flex flex-col items-center">
                    <div class="stat__img">
                        <img src="../assets/images/stat2.png" alt="">
                    </div>
                    <div class="stat__stat">
                        {{ stats?.count_users }}
                    </div>
                    <div class="stat__desc">
                        {{ users(stats.count_users) }}
                    </div>
                </div>
                <div class="stat__item stat__item flex flex-col items-center">
                    <div class="stat__img">
                        <img src="../assets/images/stat3.png" alt="">
                    </div>
                    <div class="stat__stat">
                        {{ stats.completed_tasks }}
                    </div>
                    <div class="stat__desc">
                        {{ tasks(stats.completed_tasks) + ' выполнено' }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.stat__stat {
    font-size: clamp(1rem, 0.8rem + 1vw, 2rem);
    @apply text-main text-center font-JB font-extrabold leading-normal uppercase
}

.stat__img {
    @apply mb-3
}

.stat__desc {
    font-size: clamp(0.625rem, 0.55rem + 0.375vw, 1rem);
    @apply font-Ml text-center font-medium leading-normal
}

@media screen and (max-width: 780px) {
    .stat__row {
        @apply flex-col
    }
    .stat__item {
        @apply mb-3.5
    }
}
</style>