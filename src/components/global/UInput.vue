<script setup>

import {ref, watch} from "vue";

const {placeholder, modelValue, type, label} = defineProps({
    type: {
        type: String,
        required: true,
    },
    placeholder: {
        type: String,
        required: true
    },
    modelValue: {
        type: String,
        required: true
    },
    label: {
        type: String,
        required: true
    }
})

const id = +(Math.random() * (10 + 9 - 9)).toString(2)

</script>

<template>
    <label :for="id" class="flex flex-col mt-5 font-medium font-Ml mb-2">{{ label }}</label>
    <input class="uinput" :type="type" :placeholder="placeholder" :id="id" :value="modelValue"
           @input="$emit('update:modelValue', $event.target.value)"/>


</template>

<style scoped>
.uinput {
    border-radius: 10px;
    font-size: clamp(0.9rem, 0.425rem + 0.375vw, 1rem);
    @apply border-gray-400 border p-[0.625rem] bg-gray-100 focus:border-main
}
</style>