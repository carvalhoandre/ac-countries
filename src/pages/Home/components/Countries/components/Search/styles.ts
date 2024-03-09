import styled from "styled-components";
import { grey, primary } from "../../../../../../styles/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5em;
  align-items: center;
`;

export const Search = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5em;
  align-items: center;
  border: ${grey.lighter} 0.1rem solid;
  border-radius: 0.5em;
  padding: 0.4em 0.9em;
  width: 30%;
  background-color: ${grey.white};
  width: 15rem;

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

export const ButtonSearch = styled.button`
  background-color: ${primary.dark};
  padding: 0.5rem 1.3rem;
  border: none;
  border-radius: 0.5rem;
  width: 8rem;

  &:hover {
    background-color: ${primary.light};
    cursor: pointer;
  }

  @media screen and (max-width: 767px) {
    align-items: center;
  }
`;
