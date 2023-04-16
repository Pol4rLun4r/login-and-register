import GlobalStyle from "../../globalStyles/GlobalStyle";
import Noise from "../../globalStyles/Noise";
import Main from "../../components/test/Main";
import { Outlet } from "react-router-dom";
import NavBar from "../../components/navBar/NavBar";

const Root = () => {
    return (
        <>
            <GlobalStyle />
            <Noise />
            <Main>
            <NavBar/>
                <Outlet />
            </Main>
        </>
    )
}

export default Root;