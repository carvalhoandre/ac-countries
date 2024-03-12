import styled from "styled-components";
import { grey } from "../../styles/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2em 0em;
  gap: 0.3em;

  @media screen and (max-width: 767px) {
    margin-top: 1em;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  margin-top: 1.5rem;

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 2rem;
  width: 50%;
  border: ${grey.light} 0.1rem solid;
  margin: auto;
  background-color: ${grey.white};
  cursor: pointer;

  @media screen and (max-width: 767px) {
    width: 80%;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Information = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const FlagImage = styled.img`
  width: 50px;
  height: auto;
`;
