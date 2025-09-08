import Videocard from "../../components/videocard/Videocard"
import s from "./minhalista.module.scss"

function Minhalista({listaFavoritos, aoAssistir, aoRemover}) {
  return (
    <>
      <h1 className={s.tituloFilmes}>Seus Filmes Favoritos</h1>
      <main className={s.main}>
        {listaFavoritos.length === 0 ? (
          <h2 className={s.subtitulo}>Você ainda não adicionou nenhum filme à sua lista.</h2>
        ) : (listaFavoritos.map(filme => (
          <Videocard
            key={filme.id}
            imagem={filme.imagem}
            titulo={filme.titulo}
            minLaguraImg="200px"
            minAlturaImg="277.55px"
            larguraContainer="200px"
            alturaCardContainer="305px"
            eFavorito={true}
            aoAssistir={()=> aoAssistir(filme)}
            aoRemover={()=> aoRemover(filme)}
          />)
        ))}
      </main>
    </>
  )
}

export default Minhalista