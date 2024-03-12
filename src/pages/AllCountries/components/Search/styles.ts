import styled from "styled-components";
import { grey } from "../../../../styles/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5em;
  align-items: center;
  border: ${grey.lighter} 0.1rem solid;
  border-radius: 0.5em;
  padding: 0.4em 0.9em;
  width: 30%;
  background-color: ${grey.white};

  @media screen and (max-width: 767px) {
    width: 80%;
  }
`;

export const Input = styled.input`
  color: ${grey.dark};
  width: 100%;
  border: none;
  background-color: ${grey.white};

  &:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
  }
`;
