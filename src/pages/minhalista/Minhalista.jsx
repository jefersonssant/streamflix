import Videocard from "../../components/videocard/Videocard"
import s from "./minhalista.module.scss"

function Minhalista({aoFiltrarFavorito}) {
  return (
    <>
      <h1 className={s.tituloFilmes}>Seus Filmes Favoritos</h1>
      <main className={s.main}>
        {aoFiltrarFavorito.length === 0 ? (
          <h2 className={s.subtitulo}>Você ainda não adicionou nenhum filme à sua lista.</h2>
        ) : (aoFiltrarFavorito.map(filme => (
          <Videocard
            key={filme.id}
            imagem={filme.imagem}
            titulo={filme.titulo}
            minLagura="200px" 
            altura="auto"
            larguraContainer="200px"
            alturaCardContainer="305px"
            eFavorito={aoFiltrarFavorito}
          />)
        ))}
      </main>
    </>
  )
}

export default Minhalista