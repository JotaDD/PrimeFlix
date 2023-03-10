import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import "./filme-info.css"
import { toast } from "react-toastify"


import Erro from "../Erro"

import api from "../../services/api"
const Filme = () => {
	const { id } = useParams()
	const navigate = useNavigate()
	const [filme, setFilme] = useState({})
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		async function loadFilme() {
			await api
				.get(`/movie/${id}`, {
					params: {
						api_key: "4aa347f15a417a40d628c0718353997f",
						language: "pt-br",
					},
				})
				.then((response) => {
					setFilme(response.data)
					setLoading(false)
				})
				.catch(() => {
					navigate("*", { replace: true })
					return
				})
		}
		loadFilme()

		return () => {
			console.log("Componente foi desmontado")
		}
	}, [id, navigate])

	const salvarFilme = () => {
		const minhaLista = localStorage.getItem("@primeflix")

		let filmesSalvos = JSON.parse(minhaLista) || []

		const hasFilme = filmesSalvos.some((filmesSalvo) => filmesSalvo.id === filme.id)

		if (hasFilme) {
			toast.warning("Esse filme já está na lista")
			return
		}
		filmesSalvos.push(filme)
		localStorage.setItem("@primeflix", JSON.stringify(filmesSalvos))
		toast.success("Filme salvo com sucesso!")
	}

	if (loading) {
		return (
			<div className='filme-info'>
				<h1>Carregando detalhes...</h1>
			</div>
		)
	}
	return (
		<div className='filme-info'>
			<h1>{filme.title}</h1>
			<img
				src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`}
				alt={filme.title}
			/>
			<h3>Sinopse</h3>
			<span>{filme.overview}</span>
			<strong>Avaliação: {filme.vote_average.toFixed(1)}/10</strong>

			<div className='area-buttons'>
				<button onClick={salvarFilme}>Salvar</button>
				<button>
					<a
						target='blank'
						rel='external'
						href={`https://youtube.com/results?search_query=${filme.title} Trailer`}
					>
						Trailer
					</a>
				</button>
			</div>
		</div>
	)
}

export default Filme
