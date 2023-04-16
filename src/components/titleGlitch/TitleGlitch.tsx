import GlitchedWriter, { wait } from "glitched-writer"
import TitleStyle from "./style/Title"

import "./style/glitch.scss"

interface ITitle {
    Title: string
    InitTitle?: string
}

const TitleGlitch = ({ Title, InitTitle }: ITitle) => {

    setTimeout(() => {
        const Writer = new GlitchedWriter("#glitch", { letterize: true });
        (async () => {
            await wait(1000)
            await Writer.write(Title);
        })()
    }, 100);

    return (
        <>
            <div className="div">
                <TitleStyle className="text" id="glitch">
                    {InitTitle && InitTitle}
                </TitleStyle>
            </div>
        </>
    )
}

export default TitleGlitch;