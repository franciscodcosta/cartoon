import axios from "axios";

const api = axios.create({
    baseURL: "https://thesimpsonsquoteapi.glitch.me"
});

export default api;