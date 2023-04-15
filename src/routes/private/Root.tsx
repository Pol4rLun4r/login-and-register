import GlobalStyle from "../../globalStyles/GlobalStyle"
import Noise from "../../globalStyles/Noise"
import Main from "../../components/test/style/Main"
import { Outlet } from "react-router-dom"

const Root = () => {
    return (
        <>
            <GlobalStyle />
            <Noise />
            <Main>
                <Outlet />
            </Main>
        </>
    )
}

export default Root