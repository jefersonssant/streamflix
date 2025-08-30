import s from "./filmbanner.module.scss"
import logoWandinha from "../../assets/imgs/Logo-Wandinha.png"
import playIcon from "../../assets/icons/play.png"
import favoritadoIcon from "../../assets/icons/favoritado.png"
import Button from "../button/Button"


function Filmbanner() {
  return (
    <section className={s.filmbanner}>
      <section>
        <img className={s.logoImg} src={logoWandinha} alt="Imagem de logomarca da Wandinha." />
        <h2>Series de Misterio - 2022 - <span>16</span></h2>
        <p>Inteligente, sarcástica e apática, Wandinha Addams pode estar meio morta por dentro, mas na Escola Nunca Mais ela vai fazer amigos, inimigos e investigar assassinatos. Assista o quanto quiser. Tim Burton dirige esta série sombria e divertida estrelada por Jenna Ortega (Você).</p>
      <div className={s.buttons}>
        <Button 
          corFundo="#35d7da"
          largura= "160px"
          altura= "50px"
          tamanhoFonte= "20px"
          imagem= {playIcon}
          alt= "Imagem de ícone de dar play no filme."
          nome= "Assistir"
        />
        <button className={s.favoritarBtn}>
          <img className={s.imgButton} src={favoritadoIcon} alt="Imagem de ícone de favoritar filmes." />
          Adicionar Aos Favoritos
        </button>
      </div>
      </section>
    </section>
  )
}

export default Filmbanner