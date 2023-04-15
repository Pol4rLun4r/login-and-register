import styled from "styled-components";
import { device } from "./Devices.util";
import { topAndBottom, leftAndRight } from "./Sides.util";

const Window = styled.div`
    border-width: 2.5px;
    border-style: solid;
    border-image: linear-gradient(220deg, rgba(255, 255, 255, 0.548) 0%, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0) 60%, rgba(255, 255, 255, 0.548) 100%) 1;

    max-width: 60vw;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding-top: 60px;
    padding-bottom: 60px;

    @media ${device.mobileS}{
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
        padding-top: ${topAndBottom.mobile500px};
        padding-bottom: ${topAndBottom.mobile500px};
        padding-left: ${leftAndRight.mobile500px};
        padding-right: ${leftAndRight.mobile500px};
    }

    @media ${device.mobile600px}{
        padding-top: ${topAndBottom.mobile600px};
        padding-bottom: ${topAndBottom.mobile600px};
        padding-left: ${leftAndRight.mobile600px};
        padding-right: ${leftAndRight.mobile600px};
    }
`

export default Window