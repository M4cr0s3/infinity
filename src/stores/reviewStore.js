import {defineStore} from "pinia";
import {ref} from "vue";
import axios from "axios";
import {API_URL} from "../../API_URL.js";


export const useReviewStore = defineStore('reviews', () => {
    const reviews = ref([])
    let error = ref('')

    const getReviews = async () => {
        try {
            const resp = await axios.get(`${API_URL}/get_reviews`)
            reviews.value = resp.data.reviews
        } catch (e) {
            error.value = e.message
        }
    }

    return {reviews, error, getReviews}
})
