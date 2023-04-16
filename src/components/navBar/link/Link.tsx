import { ReactNode, useState } from "react";
import { useLocation } from "react-router-dom";

import Container from "./style/Container";
import LinkStyle from "./style/LinkStyle";
import { HoverIcon, HoverIconActivePage } from "./style/HoverIcon";

interface ILink {
    page: string
    namePage: ReactNode
}

const Link = ({ page, namePage }: ILink) => {
    const [isHovered, setIsHovered] = useState(false);
    const pathname = useLocation().pathname;

    return (
        <Container
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >
            <LinkStyle to={page}> {namePage}
                <HoverIcon
                    animate={{
                        opacity: isHovered ? 1 : 0,
                        width: isHovered ? "20px" : "0px",
                        height: isHovered ? "3px" : "0px",
                    }}
                    transition={{ duration: isHovered ? .2 : .2 }}
                />

                <HoverIconActivePage
                    animate={{
                        display: pathname === `/${page}` ? "block" : "none",
                        width: pathname === `/${page}` ? "100%" : "0px",
                        height: pathname === `/${page}` ? "3px" : "0px",
                    }}

                    transition={{ duration: isHovered ? .2 : .2 }}
                />
            </LinkStyle>
        </Container>
    )
}

export default Link