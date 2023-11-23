<script setup>
import {RouterView} from 'vue-router'
import {useUserStore} from "@/stores/user";
import {onMounted} from "vue";


const userStore = useUserStore()

onMounted(() => {
    userStore.checkUser()
})

</script>

<template>
    <RouterView/>
</template>

<style scoped>

</style>
