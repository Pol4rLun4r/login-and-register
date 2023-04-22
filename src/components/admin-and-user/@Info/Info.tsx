import { Data, Title } from "../style/Data"
import Text from "../../textGlitchs/admAndUser/TitleGlitch"

interface IUser {
    title: string
    data: string
}

const Info = ({ title, data }: IUser) => {
    const _id = title + Date.now() + Math.floor(Math.random() * 100);

    console.log(_id);
    
    return (
        <div>
            <Title>{title}:</Title>
            <Data>
                <Text Title={data} _id={_id} />
            </Data>
        </div>
    )
}

export default Info;