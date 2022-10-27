import React, { FC, useState } from "react";
import styled from "styled-components";
import { MdPersonAdd } from "react-icons/md";

interface CardProps {
  imageUrl?: string;
  name: string;
  lastMsg: string;
}

export const Card: FC<CardProps> = ({ imageUrl, name, lastMsg }) => {
  const [isFriend, setIsFriend] = useState(true); // false должно быть
  const [isOpened, setIsOpened] = useState(false);

  const onAddToFriend = () => {
    setIsFriend(true);
  };

  const onOpenCard = () => {
    setIsOpened(true);
  };

  // isOpened == true, Header меняется и меняется бэкграунд color

  return (
    <CardContainer onClick={onOpenCard}>
      <Image src={imageUrl} />
      <CardContent>
        <CardTitle>{name}</CardTitle>
        <CardLastMsg>{lastMsg}</CardLastMsg>
      </CardContent>
      {isFriend && <MdPersonAddStyled onClick={onAddToFriend} />}
    </CardContainer>
  );
};

const CardContainer = styled.div`
  display: flex;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  position: relative;
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

const MdPersonAddStyled = styled(MdPersonAdd)`
  position: absolute;
  right: 0;
  color: #fff;
  width: 20px;
  height: 20px;
  right: 15px;
  top: 30px;
  cursor: pointer;
`;
