import { ReactNode } from 'react'
import Container from './style/Container'

interface ILayout {
    children: ReactNode
}

const Layout = ({ children }: ILayout) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default Layout