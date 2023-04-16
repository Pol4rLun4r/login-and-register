// style
import Button from "./style/Button"
import Container from "./style/Container";

import { useNavigate } from "react-router-dom";

const BackToHome = () => {
    const navigate = useNavigate();

    const handleBackToHome = async () => {
        navigate('/');
    };

    return (
        <Container>
            <Button onClick={handleBackToHome}>back to home</Button>
        </Container>
    )
};

export default BackToHome;