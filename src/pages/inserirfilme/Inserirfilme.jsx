import s from "./inserirfilme.module.scss"
import InputNovoFilme from "../../components/inputnovofilme/InputNovoFilme"

function Inserirfilme() {
  return (
    <form className={s.form} method="POST">
      <h1>Insira um novo Filme</h1>
      <label htmlFor="categoria">Escolha uma categoria de filmes</label>
      <select id="categoria">
        <option value="Filmes de Terror">Filmes de Terror</option>
        <option value="Filmes de Ação">Filmes de Ação</option>
        <option value="Filmes de Ficção">Filmes de Ação</option>
      </select>
      <InputNovoFilme
        nomeLabel="Título do Filme"
        tipo="text"
        obrigatorio={true}
        placeholder="Insira o título do filme"
      />
      <InputNovoFilme
        nomeLabel="Insira a imagem do filme"
        tipo="text"
        obrigatorio={true}
        placeholder="Insira o link da imagem"
        exemplificacao={"Deve ser um link válido de uma imagem de filme, devendo ser imagem de capa"}
      />
      <InputNovoFilme
        nomeLabel="Insira imagem do banner do filme"
        tipo="text"
        obrigatorio={true}
        placeholder="Insira o link do banner"
        exemplificacao={"Deve ser um link válido de uma imagem de banner do filme, banner é em um formato mais retangular"}
      />
      <button type="submit">Inserir</button>
    </form>
  )
}

export default Inserirfilme