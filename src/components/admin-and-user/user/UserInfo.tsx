// style
import Container from "./style/Container"
import Window from "./style/Window";
import { ErrorMsg, LoadingMsg } from "../style/Messages"

// user info
import Info from "../@Info/Info";

// fetch user 
import { useQuery } from "react-query"
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";

interface TypeUser {
    id: string
    username: string
    role: string
    createAt: Date
}

const UserInfo = () => {
    const api = useAxiosPrivate();

    // get user
    const { data, isLoading, error } = useQuery<TypeUser>('User', async () => {
        const response = await api.get('user');
        return response.data
    })

    const id = data?.id as string
    const username = data?.username as string
    const role = data?.role as string
    const createAt = data?.createAt.toString().slice(0, 10) as string

    return (
        <Container
            isError={error as boolean}
            isLoading={isLoading}
        >
            {isLoading && <LoadingMsg>loading...</LoadingMsg>}
            {error as boolean && <ErrorMsg>network error</ErrorMsg>}

            {!error as boolean && !isLoading &&
                <Window>
                    <Info title="id" data={id} />
                    <Info title="username" data={username} />
                    <Info title="role" data={role} />
                    <Info title="createAt" data={createAt} />
                </Window>
            }
        </Container>
    )
}

export default UserInfo