import styled from "styled-components";
import { device } from "../../../../globalStyles/Devices.util";

const TitleStyle = styled.div`

    @media ${device.mobileS}{
        font-size: 20px;
    }

    @media ${device.mobileM}{
        font-size: 25px;
    }

    @media ${device.mobileL}{
        font-size: 30px;
    }

    @media ${device.myMobile}{

    }

    @media ${device.mobile500px}{
        font-size: 35px;
    }

    @media ${device.mobile600px}{

    }

    @media ${device.tablet}{
        font-size: 40px;
    }
`

export default TitleStyle