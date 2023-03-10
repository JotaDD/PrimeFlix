import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Filme from "./pages/Filme"
import Home from "./pages/Home"
import Erro from "./pages/Erro"
import Favoritos from "./pages/Favoritos"



function RoutesApp() {
	return (
		<BrowserRouter>
      <Header/>    
			<Routes>
				<Route path='/' element={<Home/>} />
				<Route path="/filme/:id" element={<Filme/>} />
				<Route path="/favoritos" element={<Favoritos/>} />
				
				{/* Rota de erro */}
				<Route path="*" element={<Erro/>} />
			</Routes>
		</BrowserRouter>
	)
}

export default RoutesApp
