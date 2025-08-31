import Button from "../button/Button"
import s from "./videocard.module.scss"

function Videocard({ imagem, titulo, minLagura, altura, larguraContainer, alturaCardContainer, aoAssistir, aoFavoritar, eFavorito}) {
  return (
    <section className={s.cardContainer} style={{width: larguraContainer, height: alturaCardContainer}}>
      <img  className={s.imgFilme} style={{minWidth: minLagura, height: altura}} src={imagem} alt="" />
      <h3>{titulo}</h3>
      <div>
        <Button
          corFundo= "red"
          largura= "80px"
          altura= "25px"
          tamanhoFonte="12px"
          corFonte= "white"
          nome= "Assistir"
          onClick={aoAssistir}
        />
        {(!eFavorito) &&
        (<Button 
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