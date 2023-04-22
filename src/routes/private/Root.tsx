import GlobalStyle from "../../globalStyles/GlobalStyle";
import Noise from "../../globalStyles/Noise";
import Main from "../../components/layouts/style/Main";
import NavBar from "../../components/navBar/NavBar";
import { Outlet } from "react-router-dom";

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