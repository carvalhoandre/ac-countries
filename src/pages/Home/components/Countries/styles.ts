import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5em;
  padding: 2.5rem 2rem;
  
  @media screen and (max-width: 767px) {
    padding: 1em;
    gap: 2em;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;
