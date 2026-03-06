import apiClient from "./axiosConfig"

export const getUsers = async () => {

    const response = await apiClient.get("/users")
    return response.data
}

export const getUsersBYId = async (id) => {

    const response = await apiClient.get(`/users/${id}`)
    return response.data
}

export const createUser = async (data) => {

    const response = await apiClient.post("/users/register", data)
    return response.data
}

export const checkUser = async (data) => {

    const response = await apiClient.get("/users/checkUser")
    return response.data
}

export const loginUser = async (data) => {

    const response = await apiClient.post("/users/login", data)
    return response.data
}