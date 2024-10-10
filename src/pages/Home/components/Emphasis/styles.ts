import styled from "styled-components";
import { primary } from "../../../../styles/theme";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  gap: 3rem;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`;

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  text-align: center;
`;

export const Info = styled.div`
  background-color: ${primary.default};
  padding: 0.5em 1em;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
`;
