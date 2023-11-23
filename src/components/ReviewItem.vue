<script setup>


import {BASE_API_URL} from "../../API_URL";

const {id, content, user} = defineProps({
    id: {
        type: Number,
        required: true,
    },
    content: {
        type: String,
        required: true
    },
    user: {
        type: Object,
        required: true
    }
})

const signature = (user) => {
    switch (user.profession.title) {
        case 'Frontend':
            return `— ${user.name} ${user.surname}, <${user.profession.title} Dev />`
        case 'Backend':
            return `— ${user.name} ${user.surname}, $${user.profession.title} Dev;`
    }
}

</script>

<template>
    <div class="flex review__wrapper">
        <div class="review__item">
            <div class="review__image" :style="{backgroundImage: `url(${BASE_API_URL}${user.image_path})`}" />
            <div class="review__content">
                <h3 class="review__text">
                    {{ content }}
                </h3>
                <div class="review__author">
                    {{ signature(user) }}
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.review__wrapper {
    @apply px-32
}
.review__item {
    @apply flex items-center justify-between
}
.review__image {
    @apply flex items-center justify-center bg-cover mr-8;
    height: clamp(4.375rem, 3.3625rem + 5.0625vw, 9.4375rem);
    width: clamp(4.375rem, 3.3625rem + 5.0625vw, 9.4375rem);
    border-radius: 50%;
}

.review__text {
    @apply text-primary font-Ml font-medium leading-normal;
    font-size: clamp(0.625rem, 0.55rem + 0.375vw, 1rem);
}
.review__author {
    font-size: clamp(1rem, 0.8rem + 1vw, 2rem);
    @apply mt-4 text-main font-Ml font-bold leading-normal
}
.review__content {
    width: clamp(12.5rem, 7.7125rem + 23.9375vw, 36.4375rem);
}

@media screen and (max-width: 1170px) {
    .review__wrapper {
        @apply px-20
    }
}

@media screen and (max-width: 560px) {
    .review__wrapper {
        @apply px-5 items-center justify-center
    }
    .review__item {
        @apply flex-col
    }
    .review__image {
        @apply mr-0 mb-2
    }
    .review__author {
        @apply mt-2
    }

}
</style>