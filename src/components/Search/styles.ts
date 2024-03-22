import styled from "styled-components";
import { grey, primary } from "../../styles/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1em;
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
  background-color: ${grey.white};
  width: 15rem;
  position: relative;

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

export const History = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  border: ${grey.lighter} 0.1rem solid;
  border-radius: 0.5em;
  padding: 0.4em 0.9em;
  background-color: ${grey.white};
  width: 14.8rem;
  padding: 0.5rem 1rem;
  position: absolute;
  top: 2rem;
  left: 0rem;
  z-index: 100;

  @media screen and (max-width: 767px) {
    width: 13rem;
  }
`;

export const ButtonSearch = styled.button`
  background-color: ${primary.dark};
  padding: 0.5rem 1.3rem;
  border: none;
  border-radius: 0.5rem;
  width: 8rem;
  cursor: pointer;

  &:hover {
    background-color: ${primary.light};
  }
  
  &:disabled {
    background-color: ${primary.lighter};
    cursor: not-allowed;
  }

  @media screen and (max-width: 767px) {
    align-items: center;
  }
`;

export const ButtonHistory = styled.button`
  cursor: pointer;
  background-color: ${grey.white};
  border: none;
  padding: 0.12rem;
`;
