import styled, { css } from "styled-components";
import { grey, primary } from "../../../../styles/theme";

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

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;

  align-items: center;

  & > p {
    margin-right: 1rem;
  }
`;

export const Icon = styled.div<{ selected: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  border: 1px solid ${grey.default};
  cursor: pointer;

  ${({ selected }) => css`
    background-color: ${selected ? primary.default : grey.white};

    & > * {
      color: ${selected ? grey.white : grey.darkest}
    }
  `}
`;
