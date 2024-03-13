import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
  padding: 2.5rem 2rem;

  @media screen and (max-width: 767px) {
    padding: 1em;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;
