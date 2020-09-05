import axios from "axios";

// create a base url so you don't have to type out endpoint

const instance = axios.create({ baseURL: "https://api.themoviedb.org/3" });

export default instance;
