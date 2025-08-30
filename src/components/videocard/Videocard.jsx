import Button from "../button/Button"
import s from "./videocard.module.scss"

function Videocard({ imagem, titulo, largura, minLagura, altura, alturaCardContainer, aoAssistir }) {
  return (
    <section className={s.cardContainer} style={{height: alturaCardContainer}}>
      <img  className={s.imgFilme} style={{maxWidth: largura,minWidth: minLagura, height: altura}} src={imagem} alt="" />
      <h3>{titulo}</h3>
      <div>
        <Button
          corFundo= "red"
          largura= "80px"
          altura= "25px"
          tamanhoFonte="16px"
          corFonte= "white"
          nome= "Assistir"
          onClick={aoAssistir}
        />
        <Button 
          corFundo= "white"
          largura= "100px"
          altura= "25px"
          tamanhoFonte="16px"
          corFonte= "black"
          nome= "+ Minha lista"
        />
      </div>
    </section>
  )
}

export default Videocard