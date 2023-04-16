import styled from "styled-components";
import { motion } from 'framer-motion';

export const HoverIcon = styled(motion.div)`
    background-color: white; 
    
    position: absolute;
    bottom: 0;
`

export const HoverIconActivePage = styled(motion.div)`
    background-color: white; 

    /* width: 100px; */

    display: none;

    position: absolute;
    bottom: 0;
`