import TitleStyle from "./style/Title";
import GlitchedWriter, { wait } from "glitched-writer";
import { useAnimationControls } from "framer-motion";
import { useEffect } from "react";
import "./style/glitch.scss"


const TitleGlitch = () => {

    const controls = useAnimationControls();

    useEffect(() => {
        setTimeout(() => {
            controls.start({
                color: '#ffffff',
                textShadow: '0px 0px 3px #ffffff',
            })
        }, 1500);
    }, [])

    setTimeout(() => {

        const Writer = new GlitchedWriter("#glitch", { letterize: true });
        (async () => {
            await wait(1000)
            await Writer.write('not found');
        })()
    }, 100);

    return (
        <>
            <div className="div">
                <TitleStyle
                    className="text"
                    id="glitch"
                    style={{
                        textShadow: '1px 3px 6px #C83333',
                        color: '#C83333'
                    }}

                    animate={controls}
                    transition={{
                        delay: 0,
                        duration: 0
                    }}
                >
                    Error 404
                </TitleStyle>
            </div>
        </>
    )
}

export default TitleGlitch;