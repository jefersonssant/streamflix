import s from "./homepage.module.scss"
import Filmbanner from "../../components/filmbanner/Filmbanner"
import Categoria from "../../components/categoria/Categoria"
import Videocard from "../../components/videocard/Videocard"

function Homepage({listaFilmes, filtrarAssistindo, funcAoAssistir, funcAoFavoritar}) {

  return (
    <main>
      <Filmbanner />

      {filtrarAssistindo.length > 0 &&
        (<Categoria titulo="Continuar Assistindo" altura="200px">
          {filtrarAssistindo.map(filme => (
            <Videocard
              key={filme.id}
              imagem={filme.banner}
              titulo={filme.titulo}
              minLagura="280px"
              altura="auto"
              alturaCardContainer="205px"
              aoFavoritar={() => funcAoFavoritar(filme)} 
            />
          ))}
        </Categoria>
      )}

      <Categoria titulo="Filmes de Terror">
        {listaFilmes.map((filme) => (
          <Videocard
            key={filme.id}
            imagem={filme.imagem} 
            titulo={filme.titulo} 
            minLagura="200px" 
            altura="auto" 
            alturaCardContainer="305px" 
            aoAssistir={() => funcAoAssistir(filme)}
            aoFavoritar={() => funcAoFavoritar(filme)} 
          />
        ))}
      </Categoria>
    </main>
  )
}

export default Homepage