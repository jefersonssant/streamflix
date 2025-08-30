import Container from "./components/container/Container"
import Header from "./components/header/Header"
import "./globalStyle.scss"
import { useState } from "react"

function App() {

    const [listaFilmes, setListaFilmes] = useState([
    {
      id: 1, imagem: "https://i.pinimg.com/736x/9f/a7/c5/9fa7c57b46d67a795c19b94bb16ce893.jpg",
      banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRzctWUJ0A-a18WuGLoGm7kz3PlcGHZit8KA&s",
      titulo: "O Grito"
    },
    {
      id: 2, imagem: "https://i.pinimg.com/736x/9f/a7/c5/9fa7c57b46d67a795c19b94bb16ce893.jpg",
      banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRzctWUJ0A-a18WuGLoGm7kz3PlcGHZit8KA&s",
      titulo: "Halloween Ends"
    },
    {
      id: 4, imagem: "https://i.pinimg.com/736x/9f/a7/c5/9fa7c57b46d67a795c19b94bb16ce893.jpg",
      banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRzctWUJ0A-a18WuGLoGm7kz3PlcGHZit8KA&s",
      titulo: "Pânico 5"
    },
    {
      id: 5, imagem: "https://i.pinimg.com/736x/9f/a7/c5/9fa7c57b46d67a795c19b94bb16ce893.jpg",
      banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRzctWUJ0A-a18WuGLoGm7kz3PlcGHZit8KA&s",
      titulo: "Pânico 5"
    },
    {
      id: 6, imagem: "https://i.pinimg.com/736x/9f/a7/c5/9fa7c57b46d67a795c19b94bb16ce893.jpg",
      banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRzctWUJ0A-a18WuGLoGm7kz3PlcGHZit8KA&s",
      titulo: "Pânico 5"
    },
    {
      id: 7, imagem: "https://i.pinimg.com/736x/9f/a7/c5/9fa7c57b46d67a795c19b94bb16ce893.jpg",
      banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRzctWUJ0A-a18WuGLoGm7kz3PlcGHZit8KA&s",
      titulo: "Pânico 5"
    },
    {
      id: 8, imagem: "https://i.pinimg.com/736x/9f/a7/c5/9fa7c57b46d67a795c19b94bb16ce893.jpg",
      banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRzctWUJ0A-a18WuGLoGm7kz3PlcGHZit8KA&s",
      titulo: "Pânico 5"
    },
    {
      id: 9, imagem: "https://i.pinimg.com/736x/9f/a7/c5/9fa7c57b46d67a795c19b94bb16ce893.jpg",
      banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRzctWUJ0A-a18WuGLoGm7kz3PlcGHZit8KA&s",
      titulo: "Pânico 5"
    }
  ])
  const [assistindo, setAssistindo] = useState([])
    const aoAssistir = (filmes) => {
    if (!assistindo.find(f => f.id === filmes.id)) {
      setAssistindo([...assistindo, filmes]);
    }
  }

  return (
    <main>
      <Container>
        <Header 
          listaFilmes={listaFilmes} 
          filtrarAssistindo={assistindo} 
          funcAoAssistir={aoAssistir} 
        />
      </Container>
    </main>
  )
}

export default App
