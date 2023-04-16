import styled from "styled-components";
import { motion } from "framer-motion";
import { ReactNode } from "react";

const ContainerStyle = styled(motion.div)`   
    user-select: none;
    
    width: 100%;
    height: 13%;
    
    display: flex;
    align-items: center;
    justify-content: center; 

    position: relative;
`

interface IContainer {
    children: ReactNode
}

const Container = ({ children }: IContainer) => {
    return (
        <ContainerStyle
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
        >
            {children}
        </ContainerStyle>
    )
}

export default Container