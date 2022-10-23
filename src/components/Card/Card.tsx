import React, { FC } from "react";
import styled from "styled-components";

interface CardProps {
  imageUrl?: string;
  name: string;
  lastMsg: string;
}

export const Card: FC<CardProps> = ({ imageUrl, name, lastMsg }) => {
  return (
    <CardContainer>
      <Image src={imageUrl} />
      <CardContent>
        <CardTitle>{name}</CardTitle>
        <CardLastMsg>{lastMsg}</CardLastMsg>
      </CardContent>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  display: flex;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  &:hover {
    background-color: #2f2f2f;
    border-radius: 15px;
  }
`;

const Image = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin: 10px;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CardTitle = styled.h2`
  margin-bottom: 5px;
  color: #fff;
`;

const CardLastMsg = styled.p`
  color: #aaa;
  padding-right: 10px;
`;
