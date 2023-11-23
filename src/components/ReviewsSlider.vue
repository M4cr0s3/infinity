<script setup>
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ReviewItem from "@/components/ReviewItem.vue";
import {Swiper, SwiperSlide} from 'swiper/vue';
import {Autoplay, Pagination, Navigation} from 'swiper/modules';

const {reviews} = defineProps({
    reviews: {
        type: Array,
        required: true
    }
})


</script>

<template>
    <div class="container">
        <Swiper
            :autoplay="{
                delay: 3500,
                disableOnInteraction: false
            }"
            :navigation="true"
            :slides-per-view="1"
            :space-between="10"
            :modules="[Autoplay, Pagination, Navigation]"
        >
            <SwiperSlide v-for="review in reviews" :key="review.id">
                <ReviewItem
                    :id="review.id"
                    :content="review.content"
                    :user="review.user"
                />
            </SwiperSlide>
        </Swiper>
    </div>

</template>

<style scoped>

</style>