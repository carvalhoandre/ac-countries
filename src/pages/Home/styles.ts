import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: calc(90vh - 10px);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1rem;
`;

export const Image = styled.img`
  max-width: 350px;
  max-height: 350px;
  margin: 22px auto;

  @media screen and (max-width: 767px) {
    max-width: 250px;
    max-height: 250px;
    margin-top: 1.5rem;
  }
`;
