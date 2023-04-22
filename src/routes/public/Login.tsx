import Logo from "../../components/login-and-register/@Logo"
import Window from "../../globalStyles/Window"
import Form from "../../components/login-and-register/login/Form"
import Sign from "../../components/login-and-register/@sign-In@Up"
import LayoutPublic from "../../components/layouts/LayoutPublic"

const Login = () => {
    return (
        <>
            <LayoutPublic>
                <Window>
                    <Logo text="Login" />
                    <Form />
                    <Sign
                        link="/register"
                        question="Novo por aqui?"
                        textLink="Sign Up"
                    />
                </Window>
            </LayoutPublic >
        </>
    )
}

export default Login