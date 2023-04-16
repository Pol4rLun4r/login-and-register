import TitleGlitch from "../../titleGlitch/TitleGlitch"
import TitleStyle from "../style/Title"

interface ITitle {
    title: string
    initTitle?: string
}

const Title = ({ title, initTitle }: ITitle) => {
    return (
        <TitleStyle>
            <TitleGlitch Title={title} InitTitle={initTitle} />
        </TitleStyle>
    )
}

export default Title