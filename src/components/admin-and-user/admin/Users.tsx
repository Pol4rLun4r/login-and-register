// style
import Window from "../../../globalStyles/Window";

// fetch users
import { useQuery } from "react-query";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";

type TypeUsers = [{
    username: string
    role: string
}]


const Users = () => {
    const api = useAxiosPrivate();

    const { data, isLoading, error } = useQuery<TypeUsers>('Users', async () => {
        const response = await api.get('user');
        return response.data;
    });

    const users = data?.filter(user => user.role === 'USER');

    return (
        <>
            <div style={{ marginBottom: '50px' }}>
                Users: {users?.length}
            </div>

            <Window>
                {isLoading && <p>loading...</p>}
                {error as any && <p>NetWork Error</p>}
                
                {users?.map((user, i) => {
                    const username = user.username;
                    const role = user.role;

                    return (
                        <>
                            <div style={{ marginBottom: '10px' }} key={i}>
                                <h3>{username}</h3>
                                <h4>{role}</h4>
                            </div>
                        </>
                    )
                })}
            </Window>
        </>
    )
}

export default Users