<script setup>

</script>

<template>
    <button class="ubutton">
        <slot/>
    </button>
</template>

<style scoped>
.ubutton {
    background: linear-gradient(93deg, #4529EE 0.31%, #6129D3 45.64%, #6E28C6 96.47%);
    border-radius: 10px;
    @apply text-white py-3 mt-6
}
</style>