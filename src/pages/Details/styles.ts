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
  gap: 4rem;
  width: 100%;
  padding: 3rem 0;

  justify-content: center;

  @media (max-width: 700px) {
    padding: 2rem 1rem;
    gap: 2rem;
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
  width: 3rem;
  height: auto;
`;

export const Line = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;
