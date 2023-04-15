import Main from "../../components/login-and-register/style/Main"
import H1 from "../../components/test/@h1"
import GlobalStyle from "../../globalStyles/GlobalStyle"
import Noise from "../../globalStyles/Noise"

const NotFound = () => {

  return (
    <>
      <GlobalStyle />
      <Noise />
      <Main>
        <H1 Title="not found" InitTitle="Error 404" />
      </Main>
    </>
  )
}

export default NotFound