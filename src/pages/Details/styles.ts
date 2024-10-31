import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh - 80px);
  padding: 1rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;

  @media (max-width: 700px) {
    padding: 1rem;
  }
`;

export const ContainerInformations = styled.div`
  display: flex;
  gap: 2rem;
  width: 100%;
  justify-content: center;
  align-items: center;

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const FlagImage = styled.img`
  width: 5rem;
  height: auto;
`;

export const Line = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;
