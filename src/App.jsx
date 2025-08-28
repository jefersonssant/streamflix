import Container from "./components/container/Container"
import Filmbanner from "./components/filmbanner/Filmbanner"
import Header from "./components/header/Header"
import "./globalStyle.scss"

function App() {

  return (
    <>
      <Container>
        <Header />
        <Filmbanner />
      </Container>
    </>
  )
}

export default App
