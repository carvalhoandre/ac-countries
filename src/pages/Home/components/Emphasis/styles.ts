import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
  gap: 5%;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }

  @media screen and (max-width: 768px) {
    margin-top: 1em;
  }
`;

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 18rem;
`;

export const Image = styled.img`
  max-width: 350px;
  max-height: 350px;

  @media screen and (max-width: 767px) {
    max-width: 250px;
    max-height: 250px;
    margin-top: 1.5rem;
  }
`;