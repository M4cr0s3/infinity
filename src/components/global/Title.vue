<script setup>

</script>

<template>
    <h2 class="reusable__title">
        <slot />
    </h2>
</template>

<style scoped>
    .reusable__title {
        font-size: clamp(1.625rem, 1.3rem + 1.625vw, 3.25rem);
        @apply text-main text-center font-JB font-extrabold leading-normal uppercase mt-11 mb-20
    }

    @media screen and (max-width: 1170px) {
        .reusable__title {
            @apply mt-7 mb-16
        }
    }
    @media screen and (max-width: 780px){
        .reusable__title {
            @apply mt-4 mb-8
        }
    }
</style>