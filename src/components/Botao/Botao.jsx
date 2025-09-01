import s from "./botao.module.scss";

function Botao({onClick, corFundo, largura, altura, tamanhoFonte, corFonte, imagem, imgBg, alt, nome }) {
  return (
    <button
      onClick={onClick}
      className={s.button}
      style={{
        backgroundColor: corFundo,
        maxWidth: largura,
        height: altura,
        fontSize: tamanhoFonte,
        color: corFonte
      }}>

      {(imagem) &&
        <img
          className={s.imgButton}
          src={imagem}
          style={{ imgBg }}
          alt={alt} />
      }
      {nome}
    </button>
  )
}

export default Botao