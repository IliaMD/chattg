import React, { useState } from "react";
import styled from "styled-components";
import { Card, Form } from "./components";
import { BsSearch } from "react-icons/bs";
import photo from "./assets/img/photo.jpg";

function App() {
  // создаем еще один стейт так как данные мы не можем напрямую передать в
  // App потому что этот компонент находится выше и через функцию setUser будем их записывать через наш пропс из формы
  const [user, setUser] = useState("");

  return (
    <Root>
      {user ? (
        <Container>
          <List>
            <SearchBlock>
              <Input placeholder="Search" />
              <BsSearchStyled />
            </SearchBlock>
            <Cards>
              <Card imageUrl={photo} name="Глеб" lastMsg="Hello" />
              <Card imageUrl={photo} name="Глеб" lastMsg="Hello" />
              <Card imageUrl={photo} name="Глеб" lastMsg="Hello" />
              <Card imageUrl={photo} name="Глеб" lastMsg="Hello" />
            </Cards>
          </List>

          <Chat>
            <Header>
              <Image src={photo} />
              <Name>{user}</Name>
            </Header>
            <ChatContent>
              <Messages>
                <Message1>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                  iure eum voluptates, magnam deserunt fugit mollitia, ipsam
                  vero voluptatum accusamus laboriosam eos ut totam ipsum
                  perspiciatis. Suscipit similique vitae possimus?
                </Message1>
                <Message2>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                  iure eum voluptates, magnam deserunt fugit mollitia, ipsam
                  vero voluptatum accusamus laboriosam eos ut totam ipsum
                  perspiciatis. Suscipit similique vitae possimus?
                </Message2>
              </Messages>
              <SendBlock>
                <InputText placeholder="Message" />
                <ButtonSend />
              </SendBlock>
            </ChatContent>
          </Chat>
        </Container>
      ) : (
        // тут вызываем наш пропс из формы и передаем в него setUser
        <Form setUser={setUser} />
      )}
    </Root>
  );
}
const Root = styled.div`
  width: 100%;
  overflow: hidden;
  height: 100vh;
`;

const Image = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin: 10px;
`;

const Container = styled.div`
  display: flex;
  margin: 15px 10px;
  height: 100%;
  margin: 0 auto;
`;

const List = styled.div`
  background-color: #212121;
  max-width: 300px;
  width: 100%;
  border-right: 0.5px solid black;
`;

const SearchBlock = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin: 10px 0;
`;

const Input = styled.input`
  border-radius: 15px;
  padding: 5px 0px 5px 35px;
  background-color: #181818;
  color: #aaa;
  border: 2px solid #363636;
  transition: 0.2s ease-in-out;

  &:hover {
    border-color: #e6e6e656;
  }
`;

const BsSearchStyled = styled(BsSearch)`
  position: absolute;
  left: 50px;
  bottom: 8px;
  color: #aaa;
`;

const Cards = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Chat = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  background-color: #212121;
  color: #fff;
  width: 100%;
`;

const Name = styled.h2``;

const ChatContent = styled.div`
  background-image: url("https://wallpaperaccess.com/full/25606.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Messages = styled.div`
  flex: 1;
  max-width: 800px;
  width: 100%;
`;

const SendBlock = styled.div`
  display: flex;
  max-width: 800px;
  width: 100%;
  justify-content: center;
`;

const Message1 = styled.p`
  background: purple;
  max-width: 180px;
  text-align: left;
`;

const Message2 = styled.p`
  background: green;
  max-width: 180px;
  text-align: right;
  float: right;
`;

const InputText = styled.input`
  background-color: #212121;
  padding: 15px 15px;
  border-radius: 25px;
  border: none;
  margin-right: 10px;
  color: #aaa;
  box-sizing: border-box;
  max-width: 400px;
  width: 100%;
`;

const ButtonSend = styled.button`
  border: none;
  background-color: #a848a8;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

export default App;
