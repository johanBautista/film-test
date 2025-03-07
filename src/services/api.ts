const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export const GETMOVIES = `${API_URL}discover/movie?api_key=${API_KEY}`;
export const GETMOVIEBYID = `${API_URL}movie/`;
