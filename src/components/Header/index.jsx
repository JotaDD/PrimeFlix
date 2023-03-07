import './header.css'
import { Link, useParams } from 'react-router-dom'

const Header = () => {
  const id = useParams()
  return (
    <header>
      <Link  className='logo' to='./'>Prime Flix</Link>
      <Link className='favoritos' to='./favoritos'>Meus Favoritos</Link>
      
      <Link to='./filmes/{id}'>Meus Filmes</Link>
    </header>
  )
}

export default Header