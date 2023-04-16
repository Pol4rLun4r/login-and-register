import { ReactNode } from 'react'
import Container from './style/ContainerAdmin';

interface ILayout {
    children: ReactNode
}

const LayoutAdmin = ({ children }: ILayout) => {
    return (
        <Container>
            {children}
        </Container>
    )
};

export default LayoutAdmin;