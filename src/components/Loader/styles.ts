import styled, { css } from "styled-components";
import { ILoaderProps } from "./types";

export const Container = styled.div<ILoaderProps>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  margin: auto;

  ${({ isFullScreen }) =>
    isFullScreen &&
    css`
      width: 100vw;
      height: 100vh;
    `}
`;
