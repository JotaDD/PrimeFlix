import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import api from "../../services/api"
import './home.css'

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

			//console.log(response.data.results.slice(0,10))
			setFilmes(response.data.results.slice(0, 10))
		}

		loadFilmes()
	}, [])

	return (
		<div className='container'>
			<div className='lista-filmes'>
				{filmes.map((filme) => (
					<article key={filme.id}>
						<strong>{filme.title}</strong>
						<img
							src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}
							alt={filme.title}
						/>
						<Link to={`/filme/${filme.id}`}>Acessar</Link>
					</article>
				))}
			</div>
		</div>
	)
}

export default Home
