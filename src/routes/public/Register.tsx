import GlobalStyle from "../../globalStyles/GlobalStyle"
import Noise from "../../globalStyles/Noise"
import Main from "../../components/login-and-register/style/Main"
import Logo from "../../components/login-and-register/@Logo"
import Window from "../../globalStyles/Window"
import Form from "../../components/login-and-register/register/Form"
import Sign from "../../components/login-and-register/@sign-In@Up"

const Register = () => {
    return (
        <>
            <GlobalStyle />
            <Noise />
            <Main>
                <Window>
                    <Logo text="Register" />
                    <Form />
                    <Sign
                        link="/login"
                        question="Já tem uma conta?"
                        textLink="Sign In"
                    />
                </Window>
            </Main>
        </>
    )
}

export default Register