import React, { FC, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { login } from "../../store/Auth/userSlice";

export const Form = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(
      login({
        name: name,
        password: password,
      })
    );
  };

  return (
    <Root>
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
