import {defineStore} from "pinia";
import {ref} from "vue";
import axios from "axios";
import {API_URL} from "../../API_URL.js";


export const useStatsStore = defineStore('stats', () => {
    const stats = ref({})
    let error = ref('')

    const getStats = async () => {
        try {
            const resp = await axios.get(`${API_URL}/get_stats`)
            stats.value = resp.data
        } catch (e) {
            error.value = e.message
        }
    }

    return {stats, error, getStats}
})
