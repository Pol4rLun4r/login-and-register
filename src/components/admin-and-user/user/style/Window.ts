import styled from "styled-components";
import { device } from "../../../../globalStyles/Devices.util"; 

const Window = styled.div`
    border-width: 2.5px;
    border-style: solid;
    border-image: linear-gradient(220deg, rgba(255, 255, 255, 0.548) 0%, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0) 60%, rgba(255, 255, 255, 0.548) 100%) 1;
    
    display: flex;
    flex-direction: column;

    @media ${device.mobileS}{
        padding: 8%;
        margin-bottom: 10%;
    }

    @media ${device.mobileM}{
    }

    @media ${device.mobileL}{
        padding: 7%;
        margin-bottom: 8%;
    }

    @media ${device.myMobile}{
    }

    @media ${device.mobile500px}{
    }

    @media ${device.mobile600px}{
        padding: 5%;
        margin-bottom: 6%;
    }

    @media ${device.tablet}{
        padding: 4%;
        margin-bottom: 4%;
    }

    @media ${device.laptop}{
        padding: 3%;
        margin-bottom: 3%;

    }

    @media ${device.laptopL}{
        padding: 2%;
        margin-bottom: 2%;
    }
`

export default Window;