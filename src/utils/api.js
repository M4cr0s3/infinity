import axios from 'axios'
import {router} from "@/router";
import {useUserStore} from "@/stores/user";



const api = axios.create()
api.interceptors.request.use(
    (config) => {
        if (localStorage.getItem('access_token')) {
            config.headers.authorization = `Bearer ${
                localStorage.getItem('access_token')
            }`
        }
        return config
    },
    (error) => {}
)

api.interceptors.response.use(
    (config) => {
        if (localStorage.getItem('access_token')) {
            config.headers.authorization = `Bearer ${
                localStorage.getItem('access_token')
            }`
        }
        return config
    },
    (error) => {
        if (error.response.status === 401) {
            localStorage.removeItem('access_token')
            const userStore = useUserStore()
            userStore.token = ''
            router.push('/')
        }
    }
)

export default api
