import Main from "../../components/login-and-register/style/Main"
import H1 from "../../components/titleGlitch/TitleGlitch"
import GlobalStyle from "../../globalStyles/GlobalStyle"
import Noise from "../../globalStyles/Noise"
import BackToHome from "../../components/backToHome/BackToHome"

const Unauthorized = () => {
  return (
    <>
      <GlobalStyle />
      <Noise />
      <Main>
        <H1 Title="unauthorized" InitTitle="error" />
        <BackToHome />
      </Main>
    </>
  )
}

export default Unauthorized