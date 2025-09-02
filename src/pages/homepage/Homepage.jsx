import s from "./homepage.module.scss"
import Filmbanner from "../../components/filmbanner/Filmbanner"
import Categoria from "../../components/categoria/Categoria"
import Videocard from "../../components/videocard/Videocard"
import { useState, useEffect } from "react"

function Homepage({ listaFilmes, filtrarAssistindo, funcAoAssistir, funcAoFavoritar }) {

  const [categoriaTerror, setCategoriaTerror] = useState([]);
  const [categoriaAção, setCategoriaAção] = useState([]);
  const [categoriaFicção, setCategoriaFicção] = useState([]);

  useEffect(() => {
    setCategoriaTerror(listaFilmes.filter(filme => filme.categoria === "Filmes de Terror"));
    setCategoriaAção(listaFilmes.filter(filme => filme.categoria === "Filmes de Ação"));
    setCategoriaFicção(listaFilmes.filter(filme => filme.categoria === "Filmes de Ficção"));

    console.log(categoriaTerror);
  }, [listaFilmes]);

  return (
    <main>
      <Filmbanner />

      {filtrarAssistindo.length > 0 &&
        (<Categoria titulo="Continuar Assistindo" altura="230px">
          {filtrarAssistindo.map(filme => (
            <Videocard
              key={filme.id}
              imagem={filme.banner}
              titulo={filme.titulo}
              minLaguraImg="280px"
              minAlturaImg="163px"
              alturaCardContainer="205px"
              aoFavoritar={() => funcAoFavoritar(filme)}
            />
          ))}
        </Categoria>
        )}
      {categoriaTerror.length > 0 &&
        (<Categoria titulo="Filmes de Terror">
          {categoriaTerror.map((filme) => (
            <Videocard
              key={filme.id}
              imagem={filme.imagem}
              titulo={filme.titulo}
              minLaguraImg="200px"
              minAlturaImg="277.55px"
              alturaCardContainer="305px"
              aoAssistir={() => funcAoAssistir(filme)}
              aoFavoritar={() => funcAoFavoritar(filme)}
            />
          ))}
        </Categoria>)}

      {categoriaAção.length > 0 &&
        (<Categoria titulo="Filmes de Ação">
          {categoriaAção.map((filme) => (
            <Videocard
              key={filme.id}
              imagem={filme.imagem}
              titulo={filme.titulo}
              minLaguraImg="200px"
              minAlturaImg="277.55px"
              alturaCardContainer="305px"
              aoAssistir={() => funcAoAssistir(filme)}
              aoFavoritar={() => funcAoFavoritar(filme)}
            />
          ))}
        </Categoria>)}
        
        {categoriaFicção.length > 0 &&
        (<Categoria titulo="Filmes de Ficção">
          {categoriaFicção.map((filme) => (
            <Videocard
              key={filme.id}
              imagem={filme.imagem}
              titulo={filme.titulo}
              minLaguraImg="200px"
              minAlturaImg="277.55px"
              alturaCardContainer="305px"
              aoAssistir={() => funcAoAssistir(filme)}
              aoFavoritar={() => funcAoFavoritar(filme)}
            />
          ))}
        </Categoria>)}
    </main>
  )
}

export default Homepage