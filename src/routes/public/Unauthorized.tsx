import H1 from "../../components/titleGlitch/TitleGlitch"
import BackToHome from "../../components/backToHome/BackToHome"
import LayoutPublic from "../../components/layouts/LayoutPublic"

const Unauthorized = () => {
  return (
    <>
      <LayoutPublic>
        <H1 Title="unauthorized" InitTitle="error" />
        <BackToHome />
      </LayoutPublic>
    </>
  )
}

export default Unauthorized