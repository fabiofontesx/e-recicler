import React, { useContext, createContext, useState } from 'react';

type Email = string;

interface AuthContextData {
    email?: Email;
    isAuthenticated: boolean;
    login(email: string): Promise<void>;
    logout(): Promise<void>
}


const AuthContext = createContext<AuthContextData>({} as AuthContextData);


const AuthProvider: React.FC = ({ children }) => {
    const [email, setEmail] = useState<Email | undefined>(undefined);

    const login = (email: Email) => {
        if (email) {
            setEmail(email);
        }

        return new Promise<void>((resolve) => {
            resolve();
        })
    }

    const logout = () => {
        setEmail(undefined);
        return new Promise<void>((resolve) => {
            resolve();
        })
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated: !!email, email, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthProvider;

export const useAuth = () =>{
    return useContext(AuthContext)
}