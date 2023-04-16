// style
import Button from "./style/Button"
import Container from "./style/Container";

import useLogout from "../../hooks/useLogout";
import { useNavigate } from "react-router-dom";

const SignOut = () => {
    const logout = useLogout();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout();
        navigate('/login');
    };

    return (
        <Container>
            <Button onClick={handleLogout}>sign Out</Button>
        </Container>
    )
};

export default SignOut;