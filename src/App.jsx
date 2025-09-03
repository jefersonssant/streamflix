import Container from "./components/container/Container"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import "./globalStyle.scss"
import { useState, useEffect, use } from "react"
import axios from "axios"

function App() {
  
  const [listaFilmes, setListaFilmes] = useState([])
  const [assistindo, setAssistindo] = useState([])
  const [favoritoMinhaLista, setFavoritoMinhaLista] = useState([])
  
  const getFilmes = async () => {
    try {
      const responsta = await axios.get("https://api-streamflix.onrender.com/api/filmes")
      setListaFilmes(responsta.data)
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

  return (
    <main>
      <Container>
        <Header 
          listaFilmes={listaFilmes}
          atualizarLista={getFilmes} 
          funcAoAssistir={aoAssistir}
          filtrarAssistindo={assistindo}
          filtrarFavorito={favoritoMinhaLista} 
          funcAoFavoritar={aoFavoritar}
     
        />
        <Footer />
      </Container>
    </main>
  )
}

export default App
