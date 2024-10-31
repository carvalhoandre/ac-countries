import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 0.6rem;

  background: #fcfcfc;
`;

export const LogoComponent = styled.img`
  width: 3rem;
  height: 3rem;
  display: block;
  cursor: pointer;
`;

export const IconComponent = styled.img`
  width: 1rem;
  height: 1rem;
  display: block;
  cursor: pointer;

  &:hover {
    transform: scale(1.4);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
`;

export const SubContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
`;
