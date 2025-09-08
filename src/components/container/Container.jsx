import Header from "../header/Header"
import Footer from "../footer/Footer"
import s from "./container.module.scss"
import { Outlet } from "react-router-dom"

function Container() {
  return (
    <main className={s.container}>
      <Header />
      <section>
        <Outlet />
      </section>
      <Footer />
    </main>
  )
}

export default Container