import s from "./inputnovofilme.module.scss"

function InputNovoFilme({ nomeLabel, tipo, obrigatorio, placeholder, exemplificacao }) {
  return (
    <label>{nomeLabel}
      <input className={s.input} type={tipo} required={obrigatorio} placeholder={placeholder} title={exemplificacao} />
    </label>
  )
}

export default InputNovoFilme