import styled from "styled-components";

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 2em;
  gap: 0.3em;

  @media screen and (max-width: 767px) {
    margin-top: 1em;
  }
`;