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
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 0.3rem;
  align-items: center;
`;
