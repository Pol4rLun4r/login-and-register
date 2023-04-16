import styled from "styled-components";
import { device } from "../../../../globalStyles/Devices.util";
import { Link } from "react-router-dom";

const LogoLink = styled(Link)`
    color: white;
    text-decoration: none;

    margin-left: 10px;
    margin-right: 10px;

    @media ${device.mobileS} {
        margin-left: 5px;
        margin-right: 5px;
    }

    @media ${device.mobileM} {
        margin-left: 9px;
        margin-right: 9px;
    }

    @media ${device.mobileL} {
        margin-left: 12px;
        margin-right: 12px;
    }

    @media ${device.myMobile} {
        margin-left: 15px;
        margin-right: 15px;
    }

    @media ${device.mobile500px} {
        margin-left: 18px;
        margin-right: 18px;
    }

    @media ${device.mobile600px} {
        margin-left: 22px;
        margin-right: 22px;
    }

    @media ${device.tablet} {
        margin-left: 30px;
        margin-right: 30px;
    }
`

export default LogoLink