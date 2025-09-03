import s from "./inserirfilme.module.scss"
import InputNovoFilme from "../../components/inputnovofilme/InputNovoFilme"
import {useState} from "react"
import axios from "axios";

function Inserirfilme({atualizarLista}) {

  const [categoria, setCategoria] = useState("");
  const [titulo, setTitulo] = useState();
  const [imagem, setImagem] = useState();
  const [banner, setBanner] = useState();

  const cadastraCategoria = (e) => {
    setCategoria(e.target.value);
    
  }
  const cadastraTitulo = (e) => {
    setTitulo(e.target.value);
  }
  const cadastraImagem = (e) => {
    setImagem(e.target.value);
  }
  const cadastraBanner = (e) => {
    setBanner(e.target.value);
  }

  const cadastrarFilme = async (e) => {
    e.preventDefault();
    if (!categoria || !titulo || !imagem || !banner) {
      alert("Por favor, preencha todos os campos.");
      console.log("Por favor, preencha todos os campos.");
      return;
    };
    const filme = {
      categoria: categoria,
      titulo: titulo,
      imagem: imagem,
      banner: banner
    };
    try {
      await axios.post("https://api-streamflix.onrender.com/api/filmes", filme)
      alert("Filme cadastrado com sucesso!")
      atualizarLista();
      setCategoria("");
      setTitulo("");
      setImagem("");
      setBanner("");  
      console.log("Filme cadastrado com sucesso!"); 
    } catch (error) {
      alert("Erro ao cadastrar o filme, tente novamente mais tarde.")
      console.log("Erro ao cadastrar o filme: ", error);
    };
  }

  return (
    <form className={s.form} method="POST">

      <h1>Insira um novo Filme</h1>

      <label htmlFor="categoria">Escolha uma categoria de filmes</label>
      <select id="categoria" value={categoria} onChange={cadastraCategoria} required>
        <option value="">Selecione...</option>
        <option value="Filmes de Terror">Filmes de Terror</option>
        <option value="Filmes de Ação">Filmes de Ação</option>
        <option value="Filmes de Ficção">Filmes de Ficção</option>
      </select>

      <InputNovoFilme
        nomeLabel="Título do Filme"
        tipo="text"
        valor={titulo}
        obrigatorio={true}
        placeholder="Insira o título do filme"
        aoAlterado={cadastraTitulo}
      />
      <InputNovoFilme
        nomeLabel="Insira a imagem de capa do filme"
        tipo="text"
        valor={imagem}
        obrigatorio={true}
        placeholder="Insira o link da imagem"
        exemplificacao={"Deve ser um link válido de uma imagem de filme, devendo ser imagem de capa"}
        aoAlterado={cadastraImagem}
      />
      <span>
        Deve ser um link válido de uma imagem de filme, devendo ser imagem de capa.
      </span>
      <InputNovoFilme
        nomeLabel="Insira imagem do banner do filme"
        tipo="text"
        valor={banner}
        obrigatorio={true}
        placeholder="Insira o link do banner"
        exemplificacao={"Deve ser um link válido de uma imagem de banner do filme, banner é em um formato mais retangular"}
        aoAlterado={cadastraBanner}
      />
      <span>
        Deve ser um link válido de uma imagem de banner do filme, banner é em um formato mais retangular.
      </span>
      <button type="submit" onClick={cadastrarFilme}>Inserir</button>
    </form>
  )
}

export default Inserirfilme