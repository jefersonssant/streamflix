import Videocard from "../../components/videocard/Videocard"
import s from "./filmpage.module.scss"

function Filmspage({ listaFilmes }) {
  return (
    <>
      <h1 className={s.tituloFilmes}>Veja todos os filmes aqui</h1>
      <main className={s.main}>
        {listaFilmes.map((filme) =>
          <Videocard
            key={filme.id}
            imagem={filme.imagem}
            titulo={filme.titulo}
            minLaguraImg="200px"
            minAlturaImg="277.55px"
            larguraContainer="200px"
            alturaCardContainer="305px"
            aoAssistir={() => funcAoAssistir(filme)}
          />)}
      </main>
    </>
  )
}

export default Filmspage