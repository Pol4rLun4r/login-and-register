import styled from "styled-components";
import { device } from "../../../../globalStyles/Devices.util";

const LogoStyle = styled.img`
    @media ${device.mobileS} {
        width: 25px;
    }

    @media ${device.mobileM} {
        width: 30px;
    }

    @media ${device.mobileL} {
        width: 35px;
    }

    @media ${device.myMobile} {
        width: 40px;
    }

    @media ${device.mobile500px} {
        width: 40px;
    }

    @media ${device.mobile600px} {
        width: 40px;
    }

    @media ${device.tablet} {
        width: 40px;
    }
`

export default LogoStyle