import React, { useContext, createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage'
import api from '../services/api';
import { Alert } from 'react-native';

type Email = string;
interface AuthContextData {
    email?: Email;
    isAuthenticated: boolean;
    isAppLoading: boolean;
    login(email: string): Promise<void>;
    logout(): Promise<void>;

}

interface IUserAuthenticateResponse { 
    result: string;
}
interface IUserRegisterResponse {
    user: string;
    result: string
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
    const RN_AUTH_TOKEN_STORAGE_KEY = '@RNAuth:token';
    const RN_AUTH_EMAIL_STORAGE_KEY = '@RNAuth:email';

    const [email, setEmail] = useState<Email | undefined>(undefined);
    const [ isAuthenticated, setAuthenticated ] = useState(false);
    const [isAppLoading, setAppLoading ] = useState(false);

    // useEffect(() => {
    //     setAppLoading(true);
    //     const loadStoragedData = async () => {
    //         const storagedToken = await AsyncStorage.getItem(RN_AUTH_TOKEN_STORAGE_KEY);
    //         const storagedEmail = await AsyncStorage.getItem(RN_AUTH_EMAIL_STORAGE_KEY);

    //         if(storagedToken && storagedEmail){
    //             api.defaults.headers['Authorization'] = storagedToken;
    //             setEmail(email);
    //             setAuthenticated(true);
    //         }

    //         setAppLoading(false);
    //     }

    //     loadStoragedData();
    // }, []);

    const persistUserData = async (email: Email, token: string) => { 
        await AsyncStorage.setItem(RN_AUTH_TOKEN_STORAGE_KEY, token);
        await AsyncStorage.setItem(RN_AUTH_EMAIL_STORAGE_KEY, email);
    }

   
    const login = async (email: Email) => {
        try{
            const response = await api.get<IUserAuthenticateResponse>(`/authenticate/${email}`);
            
            const token = `Bearer ${response.headers['x-auth-token']}`;
            api.defaults.headers['Authorization'] = token;

            await persistUserData(email, token);
            setEmail(email);
            setAuthenticated(true);

            console.log(`Successfully authenticated as ${email}`);
            console.log(`Token ${token}`);
        }catch(err){
            const {response} = err;
            if(response.status === 404){
                await handleUserNotFound(email);
            }else { 
                Alert.alert('Erro no login', 'Sistema indisponível no momento');
            }
        }
    }

    const handleUserSignUp = async (email: Email) => { 
        try {
            const response = await api.post(`/garbcollect/user`, { user: email});
            if(response.status === 201){
                const token = `Bearer ${response.headers['x-auth-token']}`;
                api.defaults.headers['Authorization'] = token;
    
                await persistUserData(email, token);
                setEmail(email);
                setAuthenticated(true);
            }
        } catch (error) {
            Alert.alert('Erro ao registrar usuário', 'Sistema indisponível no momento');
        }
    };

    const handleUserNotFound = async (email: Email) => {
        Alert.alert(
            'Erro no login',
            'Usuário não encontrado\nDeseja realizar o cadastro?',
            [{
                text: 'Sim',
                onPress: async() => await handleUserSignUp(email)
            }, {
                text: 'Não'
            }]
        );
    }
    
    const logout = () => {
        setEmail(undefined);
        return new Promise<void>((resolve) => {
            resolve();
        })
    }

    return (
        <AuthContext.Provider value={{isAuthenticated, isAppLoading, email, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthProvider;

export const useAuth = () =>{
    return useContext(AuthContext)
}