import React, { useState, FC } from "react";
import styled from "styled-components";
interface FormProps {
  setUser: (string) => void;
}

export const Form: FC<FormProps> = ({ setUser }) => {
  const [userName, setUserName] = useState("");
  const [password, setPasword] = useState("");

  const handleClick = (name: string) => {
    setUserName(userName);
    console.log(userName);
  };

  return (
    <Root>
      <FormContainer>
        <Login>Sign in</Login>
        <InputLogin
          placeholder="Full name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <InputPassword
          placeholder="Password"
          value={password}
          onChange={(e) => setPasword(e.target.value)}
        />

        <button onClick={() => handleClick}>Click</button>
      </FormContainer>
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const Login = styled.h3``;

const InputLogin = styled.input``;

const InputPassword = styled.input``;
