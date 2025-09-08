import Container from "./components/container/Container"
import "./globalStyle.scss"
import { useState, useEffect} from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import axios from "axios"
import Homepage from "./pages/homepage/Homepage"
import Filmspage from "./pages/filmspage/Filmspage"
import Minhalista from "./pages/minhalista/Minhalista"
import Inserirfilme from "./pages/inserirfilme/Inserirfilme"
import Pagina404 from "./pages/pagina404/Pagina404"

function App() {

  const [listaFilmes, setListaFilmes] = useState([])
  const [assistindo, setAssistindo] = useState([])
  const [favoritoMinhaLista, setFavoritoMinhaLista] = useState([])

  const getFilmes = async () => {
    try {
      const responsta = await axios.get("https://api-streamflix.onrender.com/api/filmes")
      setListaFilmes(responsta.data.reverse())
      console.log(responsta.data)
    } catch (error) {
      console.log("Erro ao conectar com o banco de dados: ", error)
    }
  }
  useEffect(() => {
    getFilmes()
  }, [])

  const aoAssistir = (filmes) => {
    if (!assistindo.find(f => f.id === filmes.id)) {
      setAssistindo([...assistindo, filmes]);
    }
  }

  const aoFavoritar = (filmes) => {
    if (!favoritoMinhaLista.find(f => f.id === filmes.id)) {
      setFavoritoMinhaLista([...favoritoMinhaLista, filmes])
    }
  }

  const aoRemoverFavorito = (filmes) => {
    setFavoritoMinhaLista(
      favoritoMinhaLista.filter((filme) => filme.id !== filmes.id)
    )
  }

  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Container />}>
            <Route index element={<Homepage
              listaFilmes={listaFilmes}
              filtrarAssistindo={assistindo}
              funcAoAssistir={aoAssistir}
              funcAoFavoritar={aoFavoritar}
            />} />
            <Route path="filmes" element={<Filmspage
              listaFilmes={listaFilmes}
              funcAoAssistir={aoAssistir}
              funcAoFavoritar={aoFavoritar}
            />} />
            <Route path="minhalista" element={<Minhalista 
              listaFavoritos={favoritoMinhaLista}
              aoAssistir={aoAssistir}
              aoRemover={aoRemoverFavorito}
            />} />
            <Route path="configuracoes" element={<Inserirfilme 
              atualizarLista={getFilmes}
            />} />
            <Route path="*"  element={<Pagina404/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
