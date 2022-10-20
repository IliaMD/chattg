import styled from "styled-components";

export const Card = () => {
  return (
    <CardContainer>
      <CardImg />
      <CardTitle>Глеб Шарипов</CardTitle>
      <CardLastMsg>В госдуму внесли законопроект</CardLastMsg>
    </CardContainer>
  );
};

const CardContainer = styled.div``;

const CardImg = styled.img.attrs({
  src: `jhjh`,
})``;

const CardTitle = styled.h2``;

const CardLastMsg = styled.p``;
