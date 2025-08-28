import s from "./container.module.scss"

export default function Container({ children }) {
  return (
    <main className={s.container}>
      {children}
    </main>
  )
}