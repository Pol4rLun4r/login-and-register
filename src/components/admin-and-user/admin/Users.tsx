// style
import Container from "./style/Container";
import Window from "./style/Window";
import { ErrorMsg, LoadingMsg } from "../style/Messages";

// Users info
import Info from "../@Info/Info";
import { LengthContainer, LengthData } from "../style/Data"

// fetch users
import { useQuery } from "react-query";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";

type TypeUsers = [{
    id: string
    username: string
    role: string
    createAt: Date;
}]

const Users = () => {
    const api = useAxiosPrivate();

    // get users
    const { data, isLoading, error } = useQuery<TypeUsers>('Users', async () => {
        const response = await api.get('users');
        return response.data;
    });

    //usuarios filtrados por cargos
    const users = data?.filter(user => user.role === 'USER');

    return (
        <Container
            isError={error as boolean}
            isLoading={isLoading}
        >
            {isLoading && <LoadingMsg>loading...</LoadingMsg>}
            {error as boolean && <ErrorMsg>network error</ErrorMsg>}

            {!error as boolean && !isLoading &&
                <LengthContainer>
                    users:<LengthData>{users?.length}</LengthData>
                </LengthContainer>
            }

            {!error as boolean && !isLoading && users?.map((user) => {
                const username = user.username;
                const role = user.role;
                const id = user.id;
                const createAt = user.createAt.toString().slice(0, 10);

                return (
                    <Window
                        key={id}
                    >
                        <Info title="username" data={username} />
                        <Info title="role" data={role} />
                        <Info title="createAt" data={createAt} />
                    </Window>
                )
            })}
        </Container>
    )
};

export default Users