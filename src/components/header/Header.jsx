import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import s from "./Header.module.scss"
import perfilIcon from "../../assets/icons/Perfil.png"
import searchIcon from "../../assets/icons/lupa.png"
import inicio from "../../assets/icons/inicio.png"
import filmes from "../../assets/icons/filmes.png"
import series from "../../assets/icons/series.png"
import minhaLista from "../../assets/icons/minhaLista.png"
import logo from "../../assets/icons/logo.png"
import configuracoes from "../../assets/icons/configuracoes.png"
import Homepage from "../../pages/homepage/Homepage"
import Filmspage from '../../pages/filmspage/Filmspage'


function Header({listaFilmes, filtrarAssistindo, funcAoAssistir}) {
  return (
    <BrowserRouter>
      <header className={s.header}>
        <nav>
          <ul className={s.lista}>
            <li><img src={perfilIcon} alt="Imagem de perfil do usuário do StreamFlix." /></li>
            <li><img src={searchIcon} alt="Imagem de ícone de pesquisa." /></li>
            <li>
              <Link to="/">
                <img src={inicio} alt="Imagem de ícone de página inicial." />
                <h3>Início</h3>
              </Link>
            </li>
            <li>
              <Link to="/filmes">
                <img src={filmes} alt="Imagem de ícone de navegação para página de filmes" />
                <h3>Filmes</h3>
              </Link>
            </li>
            <li>
              <Link to="*">
                <img src={series} alt="Imagem de ícone de navegação para página de séries." />
                <h3>Séries</h3>
              </Link>
            </li>
            <li>
              <img src={minhaLista} alt="Imagem de ícone de navegação para meus favoritos." />
              <h3>Minha Lista</h3>
            </li>
            <li>
              <img src={configuracoes} alt="Imagem de ícone de configurações." />
              <h3>Configurações</h3>
            </li>
          </ul>
        </nav>
        <section>
          <img src={logo} alt="Imagem de logomarca da empresa StreamFlix" />
        </section>
      </header>
      <Routes>
        <Route path="/" 
          element={<Homepage 
            listaFilmes={listaFilmes} 
            filtrarAssistindo={filtrarAssistindo}
            funcAoAssistir={funcAoAssistir}
          />} 
        />
        <Route path="/filmes" 
          element={<Filmspage
            listaFilmes={listaFilmes}
        />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Header