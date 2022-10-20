import React from "react";
import styled from "styled-components";
import { Card } from "./components";
import { BsSearch } from "react-icons/bs";

function App() {
  return (
    <Root>
      <Container>
        <List>
          <SearchBlock>
            <Input placeholder="Search..." />
            <BsSearchStyled />
          </SearchBlock>

          <Card />
          <Card />
          <Card />
          <Card />
        </List>

        <Chat>
          <Header>
            <AvatarImg />
            <Name>Глеб</Name>
          </Header>
        </Chat>
      </Container>
    </Root>
  );
}

const Root = styled.div`
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  margin: 15px 10px;
`;

const List = styled.div``;

const SearchBlock = styled.div`
  position: relative;
`;

const Input = styled.input`
  border-radius: 15px;
  padding-left: 50px;
`;

const BsSearchStyled = styled(BsSearch)`
  position: absolute;
  left: 12px;
  bottom: 4px;
`;

const Chat = styled.div``;

const Header = styled.div``;

const AvatarImg = styled.img.attrs({
  src: `jhjh`,
})``;

const Name = styled.h2``;

export default App;
