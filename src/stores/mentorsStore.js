import {defineStore} from "pinia";
import {reactive, ref} from "vue";
import axios from "axios";
import {API_URL} from "../../API_URL";

export const useMentorStore = defineStore('mentor', () => {
    const mentors = ref([])
    const errors = ref('')

    const getMentors = async () => {
        try {
            const resp = await axios.get(`${API_URL}/get_mentors`)
            mentors.value = resp.data.mentors
        } catch (e) {
            errors.value = e.message
        }
    }

    return {mentors, getMentors}
})