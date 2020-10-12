import React, { useContext, useState } from "react";
import PrimaryButton from "../../components/PrimaryButton";
import { ActivityIndicator, Alert, Platform } from "react-native";

import {
  TextInput,
  InputContainer,
  ImageBackgroundContainer,
  BigLabel,
} from "./styles";

import ContainerKeyboardAvoiding from "../../components/ContainerKeyboardAvoiding";
import { useAuth } from "../../contexts/AuthContext";
import { emailValidator } from "../../utils/validators";
import { ThemeContext } from "styled-components";

const Login = () => {
  const themeContext = useContext(ThemeContext);
  const [email, setEmail] = useState("");
  const { login, isLoginLoading } = useAuth();

  const handleLogin = async () => {
    if (emailValidator(email)) {
      await login(email);
    } else {
      Alert.alert(
        "Erro no login",
        "E-mail invalido, digite um email valido para realizar o login"
      );
    }
  };

  const handleChangeEmail = (email: string) => {
    setEmail(email.toLowerCase());
  };

  return (
    <ContainerKeyboardAvoiding
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ImageBackgroundContainer
        source={require("../../assets/reciclagem.png")}
        imageStyle={{ width: "100%", height: 572 }}
      >
        <InputContainer>
          <BigLabel>E-Recicler</BigLabel>
          {isLoginLoading && (
            <ActivityIndicator
              size="small"
              color={themeContext.pallete.colors.text}
            />
          )}
          <TextInput
            placeholder="E-mail:"
            placeholderTextColor="#C8E6C9"
            onChangeText={handleChangeEmail}
          />
          <PrimaryButton label="Login" onPress={handleLogin} />
        </InputContainer>
      </ImageBackgroundContainer>
    </ContainerKeyboardAvoiding>
  );
};

export default Login;
