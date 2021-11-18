import * as axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '7a4c1432-f97d-4923-8cbb-792295231de4',
    }
})

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10) {
        return axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    follow (userId) {
        return axiosInstance.post(`follow/${userId}`).then(response => response.data)
    },
    unfollow (userId) {
        return axiosInstance.delete(`follow/${userId}`).then(response => response.data)
    },
}

export const profileAPI = {
    getProfile (userId) {
        return axiosInstance.get(`profile/${userId}`)
    },
    getStatus (userId) {
        return axiosInstance.get(`profile/status/${userId}`)
    },
    updateStatus (status) {
        return axiosInstance.put(`profile/status`, {status})
    },
}

export const authAPI = {
    me () {
        return axiosInstance.get(`auth/me`)
    }
}