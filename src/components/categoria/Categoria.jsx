import s from "./categoria.module.scss"

function Categoria({ titulo, altura, children }) {
  return (
    <section className={s.categoriaContainer}>
      <h2>{titulo}</h2>
      <section className={s.filmesContainer} style={{maxHeight: altura}}>
        {children}
      </section>
    </section>
  )
}

export default Categoria