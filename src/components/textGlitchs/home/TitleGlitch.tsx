import GlitchedWriter, { wait } from "glitched-writer"
import TitleStyle from "./style/Title"

import "./style/glitch.scss"


const TitleGlitch = () => {

    setTimeout(() => {
        const Writer = new GlitchedWriter("#glitch", { letterize: true });
        (async () => {
            await wait(1200)
            await Writer.write('to');

            await wait(500)
            await Writer.write('the library');
        })()
    }, 100);

    return (
        <>
            <div className="div">
                <TitleStyle className="text" id="glitch">
                    welcome
                </TitleStyle>
            </div>
        </>
    )
}

export default TitleGlitch;