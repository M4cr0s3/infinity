<script setup>
import AdvantageItem from "./AdvantageItem.vue";


const {advantages} = defineProps({
    advantages: {
        type: Array,
        required: true
    },
});
</script>

<template>
    <div class="mt-10">
        <div class="container">
            <div class="mt-3" v-for="advantage in advantages" :key="advantage.id">
                <AdvantageItem :id=advantage.id :image_path="advantage.image_path" :title="advantage.title"
                               :content="advantage.content"/>
            </div>
        </div>
    </div>


</template>

<style scoped>

</style>