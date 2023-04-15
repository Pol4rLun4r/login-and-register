import { ReactNode, createContext, useState } from "react";

interface IAuthProv {
    children: ReactNode
}

interface IAuthContext {
    auth: {}
    setAuth: React.Dispatch<React.SetStateAction<{}>>
}

const IAuthContextState = {
    auth: {},
    setAuth: () => { }
}

const AuthContext = createContext<IAuthContext>(IAuthContextState);

export const AuthProvider = ({ children }: IAuthProv) => {
    const [auth, setAuth] = useState({});

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;