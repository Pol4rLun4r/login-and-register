import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { device } from "../../../../globalStyles/Devices.util";
import LinkFont from "../../../../assets/fonts/ProductSans-Medium.ttf";

const LinkStyle = styled(NavLink)`
    @font-face{
        font-family: "linkFont";
        src: url(${LinkFont});
    }

    color: #6D6D6D;
    font-size: 25px;
    font-family: "linkFont";
    text-decoration: none;
    text-transform: capitalize;

    display: flex;
    justify-content: center;

    @media ${device.mobileS} {
        font-size: 15px;
    }

    @media ${device.mobileM} {
        font-size: 16px;
    }

    @media ${device.mobileL} {
        font-size: 17px;
    }

    @media ${device.myMobile} {
        font-size: 18px;
    }

    @media ${device.mobile500px} {
        font-size: 18px;
    }

    @media ${device.mobile600px} {
        font-size: 18px;
    }

    @media ${device.tablet} {
        font-size: 18px;
    }
`

export default LinkStyle;