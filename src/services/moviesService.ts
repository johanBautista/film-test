import apiClient from "./axiosInstance";

export const getMovies = async () => {
  try {
    const response = await apiClient.get("discover/movie");
    console.log("services", response.data.results);
    return response.data.results;
  } catch (error) {
    throw error;
  }
};

export const getMovieById = async (id: number) => {
  try {
    const response = await apiClient.get(`movie/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getMovieCreditsId = async (id: number) => {
  try {
    const response = await apiClient.get(`movie/${id}/credits`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getMovieSimilarId = async (id: number) => {
  try {
    const response = await apiClient.get(`movie/${id}/similar`);
    return response.data.results;
  } catch (error) {
    throw error;
  }
};
