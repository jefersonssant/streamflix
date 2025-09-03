import s from "./filmbanner.module.scss"
import logoWandinha from "../../assets/imgs/Logo-Wandinha.png"
import playIcon from "../../assets/icons/play.png"
import favoritadoIcon from "../../assets/icons/favoritado.png"
import Botao from "../Botao/Botao"
import { useEffect, useState } from "react"


function Filmbanner() {

  const [larguraButtonAssistir, setLarguraButtonAssistir] = useState()
  const [larguraButtonFavorito, setLarguraButtonFavorito] = useState()
  const [nomeFavorito, setNomeFavorito] = useState()

  const alterarLarguraNomeButtons = () => {
    if(window.innerWidth <= 768) {
      setNomeFavorito("Favoritar");
    }
    else if (window.innerWidth <= 425) {
      setLarguraButtonAssistir("50%");
      setLarguraButtonFavorito("50%");
    } else {
      setLarguraButtonAssistir("160px");
      setLarguraButtonFavorito("333px");
      setNomeFavorito("Adicionar Aos Favoritos");
    }
  };

  useEffect(() => {
    alterarLarguraNomeETamanhoFonteButtons();
    window.addEventListener("resize", alterarLarguraNomeButtons);
    window.addEventListener("load", alterarLarguraNomeButtons);

    return () => {
     window.removeEventListener("resize", alterarLarguraNomeButtons);
     window.removeEventListener("load", alterarLarguraNomeButtons)
    }

;
  }, []);

  return (
    <section className={s.filmbanner}>
      <section>
        <img className={s.logoImg} src={logoWandinha} alt="Imagem de logomarca da Wandinha." />
        <h2>Series de Misterio - 2022 - <span>16</span></h2>
        <p>Inteligente, sarcástica e apática, Wandinha Addams pode estar meio morta por dentro, mas na Escola Nunca Mais ela vai fazer amigos, inimigos e investigar assassinatos. Assista o quanto quiser. Tim Burton dirige esta série sombria e divertida estrelada por Jenna Ortega (Você).</p>
        <div className={s.buttons}>
          <Botao
            corFundo="#35d7da"
            largura={larguraButtonAssistir}
            altura="50px"
            tamanhoFonte="100%"
            imagem={playIcon}
            alt="Imagem de ícone de dar play no filme."
            nome="Assistir"
          />
          <Botao
            corFundo="#fff"
            largura={larguraButtonFavorito}
            altura="50px"
            tamanhoFonte="100%"
            imagem={favoritadoIcon}
            alt="Imagem de ícone de fsvotitar filme."
            nome={nomeFavorito}
          />
        </div>
      </section>
    </section>
  )
}

export default Filmbanner