import { useEffect, useState } from "react"
import api from "../../services/api"

// URL DA API: https://api.themoviedb.org/3/movie/now_playing?api_key=4aa347f15a417a40d628c0718353997f&language=pt-br

const Home = () => {
	const [filmes, setFilmes] = useState([])

	useEffect(() => {
		async function loadFilmes() {
			const response = await api.get("/movie/now_playing", {
				params: {
					api_key: "4aa347f15a417a40d628c0718353997f",
					language: "pt-br",
					page: 1,
				},
			})

			console.log(response.data.results)
		}

		loadFilmes()
	}, [])

	return (
		<div>
			<h1>BEM VINDO A HOME</h1>
			<span>Teste</span>
		</div>
	)
}

export default Home
