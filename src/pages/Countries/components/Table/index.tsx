import { ITableProps } from "./types";

import {
  TableCell,
  TableContainer,
  TableHead,
  TableHeaderCell,
  TableRow,
  TableStyled,
  FlagImage,
  ExternalLink,
} from "./styles";
import { Link } from "react-router-dom";
import { Typography } from "../../../../components/Typography";

const Table = ({ countries }: ITableProps): JSX.Element => {
  return (
    <TableContainer>
      <TableStyled>
        <TableHead>
          <TableRow>
            <TableHeaderCell>
              <Typography>País</Typography>
            </TableHeaderCell>
            <TableHeaderCell>
              <Typography>Bandeira</Typography>
            </TableHeaderCell>
            <TableHeaderCell>
              <Typography>Capital</Typography>
            </TableHeaderCell>
            <TableHeaderCell>
              <Typography>Região</Typography>
            </TableHeaderCell>
            <TableHeaderCell>
              <Typography>Idioma</Typography>
            </TableHeaderCell>
            <TableHeaderCell>
              <Typography>Links Mapas</Typography>
            </TableHeaderCell>
          </TableRow>
        </TableHead>

        <tbody>
          {countries?.map((countrie, index) => {
            return (
              <TableRow key={index}>
                <TableCell>
                  {countrie?.altSpellings
                    ? Object.values(countrie.altSpellings).join(", ")
                    : ""}
                </TableCell>
                <TableCell>
                  <FlagImage
                    src={countrie.flags.svg}
                    alt={countrie.flags.alt}
                  />
                </TableCell>
                <TableCell>
                  {countrie?.capital
                    ? Object.values(countrie.capital).join(", ")
                    : ""}
                </TableCell>
                <TableCell>{countrie?.region}</TableCell>
                <TableCell>
                  {countrie?.languages
                    ? Object.values(countrie.languages).join(", ")
                    : ""}
                </TableCell>
                <TableCell>
                  {countrie.maps.googleMaps && (
                    <ExternalLink
                      href={countrie.maps.googleMaps}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Google Maps
                    </ExternalLink>
                  )}
                  {countrie.maps.openStreetMaps && (
                    <>
                      {" "}/{" "}
                      <ExternalLink
                        href={countrie.maps.openStreetMaps}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Open Street Maps
                      </ExternalLink>
                    </>
                  )}
                </TableCell>
              </TableRow>
            );
          })}
        </tbody>
      </TableStyled>
    </TableContainer>
  );
};

export default Table;
