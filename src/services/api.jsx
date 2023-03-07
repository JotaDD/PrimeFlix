import axios from "axios"

// Base da URL:  https://api.themoviedb.org/3/
// URL DA API : https://api.themoviedb.org/3/movie/now_playing?api_key=4aa347f15a417a40d628c0718353997f&language=pt-br

const api = axios.create({
	baseURL: "https://api.themoviedb.org/3/",
})
export default api
