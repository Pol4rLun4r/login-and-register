import styled from "styled-components";
import { motion } from "framer-motion";
import { device } from "./Devices.util";
import { topAndBottom, leftAndRight } from "./Sides.util";
import { ReactNode } from "react";

const WindowStyle = styled(motion.div)`
    border-width: 2.5px;
    border-style: solid;
    border-image: linear-gradient(220deg, rgba(255, 255, 255, 0.548) 0%, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0) 60%, rgba(255, 255, 255, 0.548) 100%) 1;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding-top: 60px;
    padding-bottom: 60px;

    @media ${device.mobileS}{
        max-width: 85vw;
        width: 85%;
        padding-top: ${topAndBottom.mobileS};
        padding-bottom: ${topAndBottom.mobileS};
        padding-left: ${leftAndRight.mobileS};
        padding-right: ${leftAndRight.mobileS};
    }

    @media ${device.mobileM}{
        padding-top: ${topAndBottom.mobileM};
        padding-bottom: ${topAndBottom.mobileM};
        padding-left: ${leftAndRight.mobileM};
        padding-right: ${leftAndRight.mobileM};
    }

    @media ${device.mobileL}{
        padding-top: ${topAndBottom.mobileL};
        padding-bottom: ${topAndBottom.mobileL};
        padding-left: ${leftAndRight.mobileL};
        padding-right: ${leftAndRight.mobileL};
    }

    @media ${device.myMobile}{
        padding-top: ${topAndBottom.myMobile};
        padding-bottom: ${topAndBottom.myMobile};
        padding-left: ${leftAndRight.myMobile};
        padding-right: ${leftAndRight.myMobile};
    }

    @media ${device.mobile500px}{
        max-width: 75vw;
        padding-top: ${topAndBottom.mobile500px};
        padding-bottom: ${topAndBottom.mobile500px};
        padding-left: ${leftAndRight.mobile500px};
        padding-right: ${leftAndRight.mobile500px};
    }

    @media ${device.mobile600px}{
        max-width: 60vw;
        padding-top: ${topAndBottom.mobile600px};
        padding-bottom: ${topAndBottom.mobile600px};
        padding-left: ${leftAndRight.mobile600px};
        padding-right: ${leftAndRight.mobile600px};
    }

    @media ${device.tablet}{
        max-width: 400px;
    }
`

interface IWindow {
    children: ReactNode
}

const Window = ({ children }: IWindow) => {
    return (
        <WindowStyle
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            {children}
        </WindowStyle>
    )
}

export default Window