import {defineStore} from "pinia";
import {reactive, ref} from "vue";
import axios from "axios";
import {API_URL} from "../../API_URL";
import {useRouter} from "vue-router";
import api from '@/utils/api'
import {parseJwt} from "@/utils/parseJwt";

export const useUserStore = defineStore('user', () => {
    const token = ref('')
    const user = reactive({
        id: null,
        image_path: '',
        name: '',
        surname: '',
        email: '',
        profession: null,
        tasks: null,
        about: ''
    });
    const errors = ref('')

    const router = useRouter()

    const login = async (email, password) => {
        try {
            const resp = await axios.post(`${API_URL}/user/login`, {
                email,
                password
            })
            if (resp.data.token) {
                useToken(resp.data.token, resp);
                await router.push('/')
            } else {
                errors.value = resp.data.error
            }
        } catch (e) {
            errors.value = e.message
        }
    }

    const register = async (email, name, surname, password, password_confirmation) => {
        try {
            const resp = await axios.post(`${API_URL}/user/register`, {
                email,
                name,
                surname,
                password,
                password_confirmation
            });
            useToken(resp.data.token, resp)
            await router.push('/')
        } catch (e) {
            errors.value = e.message
        }
    }

    const getLastTasks = async () => {
        try {
            const resp = await api.get(`${API_URL}/profile/get_last_tasks?id=${user.id}`)
            useToken(resp.data.token, resp)
        } catch (e) {
            errors.value = e.message
        }
    }

    const logout = async () => {
        try {
            const resp = await api.get(`${API_URL}/user/logout`)
            localStorage.removeItem('access_token')
            token.value = ''
            user.id = null
            user.image_path = ''
            user.name = ''
            user.surname = null
            user.email = null
            user.profession = null
            user.tasks = null
            user.about = ''
            await router.push('/login')
        } catch (e) {
            errors.value = e.message
        }
    }

    const refreshToken = async () => {
        try {
            const resp = await api.post(`${API_URL}/user/refresh`)
            useToken(resp.data.token, resp)
        } catch (e) {
            errors.value = e.message
        }
    }

    const useToken = (tok) => {
        token.value = tok
        localStorage.setItem('access_token', token.value)
        const decodedJwt = parseJwt(token.value)
        user.id = decodedJwt.id
        user.image_path = decodedJwt.image_path
        user.name = decodedJwt.name
        user.surname = decodedJwt.surname
        user.email = decodedJwt.email
        user.profession = decodedJwt.profession
        user.gender = decodedJwt.gender
        user.tasks = decodedJwt.tasks
        user.about = decodedJwt.about
    }

    const checkUser = () => {
        const userStore = useUserStore()

        const token = localStorage.getItem('access_token')

        if (token) {
            useToken(token)
        } else {
            userStore.token = ''
        }
    }


    return {token, user, errors, login, register, checkUser, getLastTasks, logout}
})