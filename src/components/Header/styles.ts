import styled from "styled-components";
import { grey } from "../../styles/theme";

export const Header = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 10px;

  background: ${grey.white};
`;

export const LogoComponent = styled.img`
  width: 50px;
  height: 50px;
  display: block;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 5px;
  align-items: center;
`;
