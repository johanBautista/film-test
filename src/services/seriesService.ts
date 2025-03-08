import apiClient from "./axiosInstance";

export const getSeries = async () => {
  try {
    const response = await apiClient.get("discover/tv");
    return response.data.results;
  } catch (error) {
    throw error;
  }
};

export const getSerieById = async (id: number) => {
  try {
    const response = await apiClient.get(`tv/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
