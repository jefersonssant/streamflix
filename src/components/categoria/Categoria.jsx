import s from "./categoria.module.scss"

function Categoria({ titulo, children }) {
  return (
    <section className={s.categoriaContainer}>
      <h2>{titulo}</h2>
      <section className={s.filmesContainer}>
        {children}
      </section>
    </section>
  )
}

export default Categoria