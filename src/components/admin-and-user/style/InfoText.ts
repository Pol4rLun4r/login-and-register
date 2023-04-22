import styled from "styled-components";
import { device } from "../../../globalStyles/Devices.util";

interface Icursor {
    done: boolean
}

const Text = styled.div`
    color: rgb(109 109 109);

    position: absolute;
    top: 12%;

    .Typewriter{
        display: flex;
        justify-content: center;
    }

    .Typewriter__wrapper{
        font-family: monospace;
        text-transform: none;

        text-align: center;
    }

    .Typewriter__cursor{
        display: ${({ done }: Icursor) => done ? 'none' : 'inline' }
    }

    @media ${device.mobileS} {
        font-size: 13px;
        max-width: 90%;
    }

    @media ${device.mobileM} {
        
    }

    @media ${device.mobileL} {
        max-width: 95%;
    }

`

export default Text;