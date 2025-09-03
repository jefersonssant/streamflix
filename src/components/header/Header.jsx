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
import Minhalista from '../../pages/minhalista/Minhalista'
import Pagina404 from '../../pages/pagina404/Pagina404'
import Inserirfilme from '../../pages/inserirfilme/Inserirfilme'
import { useState, useEffect } from 'react'


function Header({ listaFilmes, filtrarAssistindo, filtrarFavorito, funcAoAssistir, funcAoFavoritar }) {

  const [menuAberto, setMenuAberto] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    function memuMobile() {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setMenuAberto(false);
      }
    }
    window.addEventListener('resize', memuMobile);
    return () => window.removeEventListener('resize', memuMobile);
  }, []);

  return (
    <BrowserRouter>
      <header className={s.header}>
        {!isMobile && (
          <nav>
            <ul className={s.lista}>
              <li><img src={perfilIcon} alt="Imagem de perfil do usuário do StreamFlix." /></li>
              <li><img src={searchIcon} alt="Imagem de ícone de pesquisa." /></li>
              <li>
                <Link className={s.Link} to="/">
                  <img src={inicio} alt="Imagem de ícone de página inicial." />
                  <h3>Início</h3>
                </Link>
              </li>
              <li>
                <Link className={s.Link} to="/filmes">
                  <img src={filmes} alt="Imagem de ícone de navegação para página de filmes" />
                  <h3>Filmes</h3>
                </Link>
              </li>
              <li>
                <Link className={s.Link} to="*">
                  <img src={series} alt="Imagem de ícone de navegação para página de séries." />
                  <h3>Séries</h3>
                </Link>
              </li>
              <li>
                <Link className={s.Link} to="/minhalista">
                  <img src={minhaLista} alt="Imagem de ícone de navegação para meus favoritos." />
                  <h3>Minha Lista</h3>
                </Link>
              </li>
              <li>
                <Link className={s.Link} to="/configuracoes">
                  <img src={configuracoes} alt="Imagem de ícone de configurações." />
                  <h3>Configurações</h3>
                </Link>
              </li>
            </ul>
          </nav>
        )}
        {isMobile && (
          <div className={s.menuMobile}>
            <button className={s.botaoMenu} onClick={() => setMenuAberto(!menuAberto)}>
              <img src={perfilIcon} alt="Imagem de perfil do usuário do StreamFlix." />
            </button>
            {menuAberto && (
              <nav className={s.navMobile}>
                <ul className={s.listaMobile}>
                  <li>
                    <Link className={s.LinkMobile} to="/" onClick={() => setMenuAberto(false)}>
                      <h3>Início</h3>
                    </Link>
                  </li>
                  <li>
                    <Link className={s.LinkMobile} to="/filmes" onClick={() => setMenuAberto(false)}>
                      <h3>Filmes</h3>
                    </Link>
                  </li>
                  <li>
                    <Link className={s.LinkMobile} to="*" onClick={() => setMenuAberto(false)}>
                      <h3>Séries</h3>
                    </Link>
                  </li>
                  <li>
                    <Link className={s.LinkMobile} to="/minhalista" onClick={() => setMenuAberto(false)}>
                      <h3>Minha Lista</h3>
                    </Link>
                  </li>
                  <li>
                    <Link className={s.LinkMobile} to="/configuracoes" onClick={() => setMenuAberto(false)}>
                      <h3>Configurações</h3>
                    </Link>
                  </li>
                </ul>
              </nav>
            )}
          </div>
        )}
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
            funcAoFavoritar={funcAoFavoritar}
          />}
        />
        <Route path="/filmes"
          element={<Filmspage
            listaFilmes={listaFilmes}
            funcAoAssistir={funcAoAssistir}
            funcAoFavoritar={funcAoFavoritar}
          />}
        />
        <Route path="/minhalista" element={<Minhalista
          aoFiltrarFavorito={filtrarFavorito}
        />}
        />
        <Route path="/configuracoes" element={<Inserirfilme />} />
        <Route path="*" element={<Pagina404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Header