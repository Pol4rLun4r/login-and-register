import Main from "../../components/login-and-register/style/Main"
import H1 from "../../components/test/@h1"
import GlobalStyle from "../../globalStyles/GlobalStyle"
import Noise from "../../globalStyles/Noise"

const Unauthorized = () => {
  return (
    <>
      <GlobalStyle />
      <Noise />
      <Main>
        <H1 Title="unauthorized" InitTitle="error"/>
      </Main>
    </>
  )
}

export default Unauthorized