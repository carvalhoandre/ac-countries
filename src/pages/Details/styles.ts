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
  gap: 5rem;
  padding: 2rem 4rem;

  justify-content: center;

  @media (max-width: 700px) {
    padding: 2rem;
  }
`;

export const FlagImage = styled.img`
  width: 50px;
  height: auto;
`;

export const Line = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;
