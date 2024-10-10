import styled from "styled-components";
import { grey } from "../../styles/theme";

export const TableContainer = styled.section`
  max-width: 950px;
  overflow-x: auto;
  width: 100%;
`;

export const TableStyled = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  background-color: ${grey.lighter};
`;

export const TableRow = styled.tr`
  min-width: 100%;

  &:nth-child(even) {
    background-color: ${grey.lightest};
  }
`;

export const TableCell = styled.td`
  padding: 0.5rem;
  border: 1px solid ${grey.default};
  text-align: left;
`;

export const TableHeaderCell = styled.th`
  padding: 0.5rem;
  border: 1px solid ${grey.default};
  text-align: left;
`;

export const FlagImage = styled.img`
  width: 3rem;
  height: auto;
`;

export const ExternalLink = styled.a`
  color: #007bff;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
`;
