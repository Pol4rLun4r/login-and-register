import LayoutPublic from "../../components/layouts/LayoutPublic"
import Logo from "../../components/login-and-register/@Logo"
import Window from "../../globalStyles/Window"
import Form from "../../components/login-and-register/register/Form"
import Sign from "../../components/login-and-register/@sign-In@Up"

const Register = () => {
    return (
        <>
            <LayoutPublic>
                <Window>
                    <Logo text="Register" />
                    <Form />
                    <Sign
                        link="/login"
                        question="Já tem uma conta?"
                        textLink="Sign In"
                    />
                </Window>
            </LayoutPublic>
        </>
    )
}

export default Register