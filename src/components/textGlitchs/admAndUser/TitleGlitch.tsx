import GlitchedWriter from "glitched-writer"

interface ITitle {
    Title: string
    _id: string
}

const TitleGlitch = ({ Title, _id }: ITitle) => {

    setTimeout(() => {
        const Writer = new GlitchedWriter(`#${_id}`, { letterize: true });
        (async () => {
            await Writer.write(Title);
        })()
    }, 100);

    return (
        <span className="textData" id={_id} />
    )
}

export default TitleGlitch;