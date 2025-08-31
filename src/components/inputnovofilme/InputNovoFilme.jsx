import s from "./inputnovofilme.module.scss"

function InputNovoFilme({tipo, obrigatorio, placeholder}) {
  return (
    <input type={tipo}  required={obrigatorio} placeholder={placeholder}/>
  )
}

export default InputNovoFilme