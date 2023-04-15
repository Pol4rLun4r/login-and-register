import api from "../services/api";
import useAuth from "./useAuth";

interface IResponse {
    data: {
        accessToken: string
    }
}

const useRefreshToken = () => {
    const { setAuth } = useAuth();

    const refresh = async () => {
        const response: IResponse = await api.get('/refresh', {
            withCredentials: true
        });

        const accessToken = response.data.accessToken;

        setAuth(prev => {
            console.log(JSON.stringify(prev));
            console.log(accessToken);

            return { ...prev, accessToken: accessToken };
        });

        return accessToken
    };
    return refresh
};

export default useRefreshToken