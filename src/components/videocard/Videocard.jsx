import Botao from "../Botao/Botao"
import s from "./videocard.module.scss"

function Videocard({ imagem, titulo, minLaguraImg, minAlturaImg, larguraContainer, alturaCardContainer, aoAssistir, aoFavoritar, eFavorito}) {
  return (
    <section className={s.cardContainer} style={{width: larguraContainer, height: alturaCardContainer}}>

      <img  className={s.imgFilme} style={{minWidth: minLaguraImg, minHeight: minAlturaImg}} src={imagem} alt={`Imagem do filme ${titulo}`} />

      <h3>{titulo}</h3>

      <div>
        <Botao
          corFundo= "red"
          largura= "80px"
          altura= "25px"
          tamanhoFonte="12px"
          corFonte= "white"
          nome= "Assistir"
          onClick={aoAssistir}
        />
        
        {(!eFavorito) &&
        (<Botao 
          corFundo= "white"
          largura= "100px"
          altura= "25px"
          tamanhoFonte="12px"
          corFonte= "black"
          nome= "+ Minha lista"
          onClick={aoFavoritar}
        />)
        }
      </div>
    </section>
  )
}

export default Videocard