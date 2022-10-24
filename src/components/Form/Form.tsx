import React, { FC, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { login } from "../../store/Auth/userSlice";
import { BsInstagram, BsFacebook, BsGoogle } from "react-icons/bs";

export const Form = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [Email, setEmail] = useState("");

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(
      login({
        name: name,
        password: password,
      })
    );
  };

  const handleAuth = () => {
    setName("");
  };

  return (
    <Root>
      {name ? (
        <Wrapper>
          <Title>Вход в аккаунт</Title>
          <Input
            placeholder="Ваше имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <ForgetPass>Забыли пароль?</ForgetPass>
          <ButtonIn onClick={handleClick}>Войти</ButtonIn>
          <SocialEnter>Или войдите с помощью социальных сетей</SocialEnter>
          <Socials>
            <BsFacebookStyled />
            <BsGoogleStyled />
            <BsInstagramStyled />
          </Socials>
          <NoAccBlock>
            <NoAcc>Еще нет аккаунта?</NoAcc>
            <Registr onClick={handleAuth}>Зарегистрируйтесь!</Registr>
          </NoAccBlock>
        </Wrapper>
      ) : (
        <Wrapper>
          <Title>Регистрация</Title>
          <Input
            placeholder="E-mail"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Ваше имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <ButtonUp onClick={handleClick}>Зарегистрироваться</ButtonUp>;
        </Wrapper>
      )}
    </Root>
  );
};

const Root = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #484848;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 450px;
  width: 100%;
  margin: 0 auto;
  border: 1px solid #242424;
  border-radius: 25px;
  background-color: #2b2a2a;
`;

const Title = styled.h2`
  color: #aaa;
  text-transform: uppercase;
  font-size: 24px;
  padding: 20px;
`;

const Input = styled.input`
  max-width: 280px;
  width: 100%;
  border-radius: 15px;
  padding: 5px 0px 5px 35px;
  background-color: #181818;
  color: #aaa;
  border: 2px solid #363636;
  transition: 0.2s ease-in-out;
  margin: 5px 0;

  &:hover {
    border-color: #e6e6e656;
  }

  &:nth-child(4) {
    margin-bottom: 25px;
  }
`;

const ForgetPass = styled.a`
  color: #aaa;
  font-size: 12px;
  cursor: pointer;
  margin: 7px 0;
`;

const ButtonIn = styled.button`
  text-align: center;
  padding: 10px 30px;
  cursor: pointer;
  transition: ease-in-out 0.2s;
  border-color: #363636;
  border-radius: 25px;
  background-color: #181818;
  color: #aaa;
  border: 2px solid #363636;
  max-width: 215px;
  width: 100%;
  margin-bottom: 10px;

  &:hover {
    background-color: #333333;
    border-color: #e6e6e656;
  }
`;

const SocialEnter = styled.h3`
  color: #aaa;
  font-size: 12px;
  margin: 10px;
`;

const Socials = styled.div`
  margin-bottom: 10px;
`;

const BsFacebookStyled = styled(BsFacebook)`
  width: 22px;
  height: 22px;
  margin-right: 15px;
  color: #aaa;
  cursor: pointer;
`;

const BsGoogleStyled = styled(BsGoogle)`
  width: 22px;
  height: 22px;
  margin-right: 15px;
  color: #aaa;
  cursor: pointer;
`;

const BsInstagramStyled = styled(BsInstagram)`
  width: 22px;
  height: 22px;
  color: #aaa;
  cursor: pointer;
`;

const NoAccBlock = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

const NoAcc = styled.h3`
  color: #aaa;
  font-size: 14px;
  margin-right: 5px;
`;

const ButtonUp = styled.button`
  text-align: center;
  padding: 10px 30px;
  cursor: pointer;
  transition: ease-in-out 0.2s;
  border-color: #363636;
  border-radius: 25px;
  background-color: #181818;
  color: #aaa;
  border: 2px solid #363636;

  &:hover {
    background-color: #333333;
    border-color: #e6e6e656;
  }
`;

const Registr = styled.a`
  cursor: pointer;
  color: #aaa;
  font-size: 16px;
`;
