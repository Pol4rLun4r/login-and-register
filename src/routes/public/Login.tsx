import GlobalStyle from "../../globalStyles/GlobalStyle"
import Noise from "../../globalStyles/Noise"
import Main from "../../components/login-and-register/style/Main"
import Logo from "../../components/login-and-register/@Logo"
import Window from "../../globalStyles/Window"
import Form from "../../components/login-and-register/login/Form"
import Sign from "../../components/login-and-register/@sign-In@Up"

const Login = () => {
    return (
        <>
            <GlobalStyle />
            <Noise />
            <Main>
                <Window>
                    <Logo text="Login" />
                    <Form />
                    <Sign
                        link="/register"
                        question="Novo por aqui?"
                        textLink="Sign Up"
                    />
                </Window>
            </Main>
        </>
    )
}

export default Login