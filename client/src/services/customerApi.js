import apiClient from "./axiosConfig";

export const getCustomers = async () => {

  const response = await apiClient.get("/customers")
  return response.data

}
