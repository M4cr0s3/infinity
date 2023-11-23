import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";
import { API_URL } from "../../API_URL.js";

export const useAdvantagesStore = defineStore('advantages', () => {
    const advantages = ref([]);
    let error = ref('');
    let loading = ref(false);

    const getAdvantages = async () => {
        loading.value = true;
        try {
            const resp = await axios.get(`${API_URL}/advantages/get_all`)
            advantages.value = resp.data;
        } catch (e) {
            error.value = e.message;
        } finally {
            loading.value = false;
        }
    }

    return { advantages, error, getAdvantages };
});