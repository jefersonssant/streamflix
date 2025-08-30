import s from "./homepage.module.scss"
import Filmbanner from "../../components/filmbanner/Filmbanner"
import Categoria from "../../components/categoria/Categoria"
import Videocard from "../../components/videocard/Videocard"
import { useState } from "react"

function Homepage() {
  const [filmes, setFilmes] = useState([
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
      <Filmbanner />
      {assistindo.length > 0 &&
        (<Categoria titulo="Continuar Assistindo">
          {assistindo.map(filme => (
            <Videocard
              key={filme.id}
              imagem={filme.banner}
              titulo={filme.titulo}
              largura="260px"
              altura="auto"
              alturaCard="205px"
            />
          ))}
        </Categoria>
      )}

      <Categoria titulo="Filmes de Terror">
        {filmes.map((filme) => (
          <Videocard imagem={filme.imagem} 
          titulo={filme.titulo} 
          largura="200px" 
          altura="auto" 
          alturaCard="305px" 
          aoAssistir={() => aoAssistir(filme)} />
        ))}
      </Categoria>
    </main>
  )
}

export default Homepage