import React, {
  useContext, createContext, useState, useEffect, PropsWithChildren, ReactChild, Provider, ProviderProps, ReactNode,
} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { Alert } from 'react-native';
import api from '../services/api';

interface IUserData {
  user: string | null;
  _id: string | null;
}
interface AuthContextData {
  userData: IUserData | null;
  isLoginLoading: boolean;
  isAuthenticated: boolean;
  isAppLoading: boolean;
  login(email: string): Promise<void>;
  logout(): Promise<void>;
}
interface IUserResponse {
  user?: string;
  _id: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider = ({ children }: PropsWithChildren<ReactNode>): JSX.Element => {
  const RN_AUTH_TOKEN_STORAGE_KEY = '@RNAuth:token';
  const RN_USER_STORAGE_KEY = '@RNAuth:user';

  const [userData, setUserData] = useState<IUserData | null>({} as IUserData);
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [isAppLoading, setAppLoading] = useState(true);
  const [isLoginLoading, setLoginLoading] = useState(false);

  useEffect(() => {
    const loadStoragedData = async () => {
      setAppLoading(true);
      const storagedToken = await AsyncStorage.getItem(
        RN_AUTH_TOKEN_STORAGE_KEY,
      );
      const storagedUser = await AsyncStorage.getItem(RN_USER_STORAGE_KEY);

      if (storagedToken && storagedUser) {
        const storagedUserJSON = JSON.parse(storagedUser);
        
        const { user, _id } = storagedUserJSON;
        api.defaults.headers.Authorization = storagedToken;
        setUserData({ user, _id });
        setAuthenticated(!!user);
      }

      setAppLoading(false);
    };

    loadStoragedData();
  }, []);

  const persistUserData = async (
    user: IUserResponse,
    token: string,
  ) => {
    await AsyncStorage.setItem(RN_AUTH_TOKEN_STORAGE_KEY, token);
    await AsyncStorage.setItem(RN_USER_STORAGE_KEY, JSON.stringify(user));
  };

  const login = async (email: string) => {
    try {
      setLoginLoading(true);
      const response = await api.get<IUserResponse>(
        `/authenticate/${email}`,
      );

      const token = `Bearer ${response.headers['x-auth-token']}`;
      api.defaults.headers.Authorization = token;
      response.data.user = email;
      
      await persistUserData(response.data, token);
      setLoginLoading(false);
      setUserData({ user: email, _id: response.data._id });
      setAuthenticated(true);
    } catch (err) {
      const { response } = err;
      if (response?.status === 404) {
        await handleUserNotFound(email);
      } else {
        Alert.alert('Erro no login', 'Sistema indisponível no momento');
        setLoginLoading(false);
      }
    }
  };

  const handleUserSignUp = async (email: string) => {
    try {
      const response = await api.post<IUserResponse>(
        '/garbcollect/user',
        {
          user: email,
        },
      );
      if (response.status === 201) {
        const token = `Bearer ${response.headers['x-auth-token']}`;
        api.defaults.headers.Authorization = token;

        await persistUserData(response.data, token);
        setUserData({ user: email, _id: response.data._id });

        setAuthenticated(true);
      }
    } catch (error) {
      Alert.alert(
        'Erro ao registrar usuário',
        'Sistema indisponível no momento',
      );
    } finally {
      setLoginLoading(false);
    }
  };

  const handleUserNotFound = async (email: string) => {
    Alert.alert(
      'Erro no login',
      'Usuário não encontrado\nDeseja realizar o cadastro?',
      [
        {
          text: 'Sim',
          onPress: async () => handleUserSignUp(email),
        },
        {
          text: 'Não',
          onPress: () => setLoginLoading(false)
        },
      ],
    );
  };

  const logout = () => {
    setUserData(null);
    return new Promise<void>((resolve) => {
      resolve();
    });
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        isLoginLoading,
        isAppLoading,
        userData,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
