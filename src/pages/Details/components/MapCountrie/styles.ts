import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  @media only screen and (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const Content = styled.div`
  min-width: 50%;
  width: 100%;
  height: 100%;
  height: 380px;

  border-radius: 10px;
  position: relative;

  @media only screen and (max-width: 768px) {
    width: 90%;
  }
`;
