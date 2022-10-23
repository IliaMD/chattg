import React, { FC, useState } from "react";
import styled from "styled-components";

interface FormProps {
  setUser: (name: string) => void;
}

export const Form: FC<FormProps> = ({ setUser }) => {
  //тут создаем стейт для имени и пароля, чтобы при вводе данных в инпут они сохранялись
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  // создаем футкцию для записи имени пользователя и в нее прокидываем наш пропс который прописан в interface
  const handleClick = () => {
    setUser(userName);
  };

  return (
    <Root>
      <Input
        placeholder="Ваше имя"
        // в value передаем наш стейт
        value={userName}
        // в onChange мы следим за изменением инпута и при каждом изменении меняем стейт через setUserName
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
      <Input
        placeholder="Пароль"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <Button onClick={handleClick}>Войти</Button>
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 200px;
  min-height: 100px;
  margin: 0 auto;
`;

const Input = styled.input``;

const Button = styled.button`
  max-width: 40px;
  background-color: red;
`;
