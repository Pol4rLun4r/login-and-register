// style
import Container from "./style/Container"
import Logo from "./logo/Logo"
import Link from "./link/Link"

// context
import useAuth from "../../hooks/useAuth"

const NavBar = () => {
    const { auth }: any = useAuth();
    const who = auth?.role === 'ADMIN' ? 'admin' : 'user';

    return (
        <>
            <Container>
                <Link page={who} namePage={who} />
                <Logo to="/" />
                <Link page="others" namePage="others" />
            </Container>
        </>
    )
}

export default NavBar