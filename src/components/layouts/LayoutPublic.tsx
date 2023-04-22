import { ReactNode } from "react"
import GlobalStyle from "../../globalStyles/GlobalStyle"
import Noise from "../../globalStyles/Noise"
import Main from "./style/Main"

interface ILayout {
    children: ReactNode
}

const LayoutPublic = ({ children }: ILayout) => {
    return (
        <>
            <GlobalStyle />
            <Noise />
            <Main>
                {children}
            </Main>
        </>
    )
}

export default LayoutPublic