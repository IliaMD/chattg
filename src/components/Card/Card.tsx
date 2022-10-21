import styled from "styled-components";
import Image from "../../Image";

export const Card = () => {
  return (
    <CardContainer>
      <Image
        imageUrl={
          "https://mir-s3-cdn-cf.behance.net/project_modules/disp/599e3b95636919.5eb96c0445ea7.jpg"
        }
      />
      <CardContent>
        <CardTitle>Глеб Шарипов</CardTitle>
        <CardLastMsg>В госдуму внесли законоп...</CardLastMsg>
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
