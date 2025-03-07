import axios from "axios";
import { GETMOVIES, GETMOVIEBYID } from "./api";

export const getMovies = async () => {
  try {
    const response = await axios.get(GETMOVIES);
    console.log("services", response.data.results);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};

export const getMovieById = async (id: number) => {
  try {
    const response = await axios.get(`${GETMOVIEBYID}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching movie ${id}:`, error);
    throw error;
  }
};
