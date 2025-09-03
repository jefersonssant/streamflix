import s from "./inputnovofilme.module.scss"

function InputNovoFilme({ nomeLabel, tipo, valor, obrigatorio, placeholder, exemplificacao, aoAlterado }) {
  return (
    <label>{nomeLabel}
      <input className={s.input} 
        type={tipo} 
        value={valor} 
        required={obrigatorio} 
        placeholder={placeholder} 
        title={exemplificacao} 
        onChange={aoAlterado}
      />
    </label>
  )
}

export default InputNovoFilme