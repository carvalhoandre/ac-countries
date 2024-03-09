import styled from "styled-components";

import { grey, fontSize } from "../../../../styles/theme";

export const TableContainer = styled.section`
  max-width: 100%;
  overflow-x: auto;
  padding: 1rem;
`;

export const TableStyled = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  background-color: ${grey.lighter};
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: ${grey.lightest};
  }
`;

export const TableCell = styled.td`
  padding: 8px;
  border: 1px solid ${grey.default};
  text-align: left;
`;

export const TableHeaderCell = styled.th`
  padding: 8px;
  border: 1px solid ${grey.default};
  text-align: left;
`;

export const FlagImage = styled.img`
  width: 50px;
  height: auto;
`;

export const ExternalLink = styled.a`
  color: #007bff;
  text-decoration: none;
  font-size: ${fontSize.small};
  text-align: center;
`;
