import {defineStore} from "pinia";
import {ref} from "vue";
import axios from "axios";
import {API_URL} from "../../API_URL";
import api from "@/utils/api";
import {useRouter} from "vue-router";


export const useCoursesStore = defineStore('courses', () => {
    const courses = ref([])
    const course = ref({})
    const errors = ref('')
    const usersCourses = ref([])

    const getCourses = async () => {
        try {
            const resp = await axios.get(`${API_URL}/get_courses`)
            courses.value = resp.data.courses
        } catch (e) {
            errors.value = e.message
        }
    }

    const getCourse = async (id) => {
        try {
            const resp = await axios.get(`${API_URL}/get_course/${id}`)
            course.value = resp.data.course
        } catch (e) {
            errors.value = e.message
        }
    }

    const checkIsUserOnCourse = async (id, user) => {
        try {
            const resp = await api.get(`${API_URL}/check_user_course/${id}?user_id=${user}`)
            errors.value = resp.data.message
        } catch (e) {
            errors.value = e.message
        }
    }

    const signOnCourse = async (id, user) => {
        try {
            const resp = await api.get(`${API_URL}/sign_course/${id}?user_id=${user}`)
            errors.value = resp.data.message
        } catch (e) {
            errors.value = e.message
        }
    }

    const getUsersCourses = async (id) => {
        try {
            const resp = await api.get(`${API_URL}/get_user_courses/${id}`)
            usersCourses.value = resp.data.courses
        } catch (e) {
            errors.value = e.message
        }
    }

    return {courses, course, errors, usersCourses, getCourses, getCourse, signOnCourse, checkIsUserOnCourse, getUsersCourses}
})