import axios from "axios";

const inatsnce = axios.create({
    baseURL: "https://api.themoviedb.org/3"
});

export default inatsnce;