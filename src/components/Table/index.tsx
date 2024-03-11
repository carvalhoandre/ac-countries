import { useNavigate } from "react-router-dom";

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

import { Typography } from "../Typography";

export const Table = ({ countries }: ITableProps): JSX.Element => {
  const navigate = useNavigate();

  const navigateToDetails = (countrie: string) => {
    const countryNames = countrie.split(" ");
    
    const firstCountryName = countryNames.length > 1 ? countryNames[countryNames.length - 1] : countrie;
  
    navigate(`/details/&${firstCountryName}`);
  };

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
              <Typography>Idiomas</Typography>
            </TableHeaderCell>
            <TableHeaderCell>
              <Typography>Links Mapas</Typography>
            </TableHeaderCell>
            <TableHeaderCell>
              <Typography>Moeda</Typography>
            </TableHeaderCell>
            <TableHeaderCell>
              <Typography>População</Typography>
            </TableHeaderCell>
          </TableRow>
        </TableHead>

        <tbody>
          {countries?.map((countrie, index) => {
            let countrieName =
              countrie.name.official !== countrie.name.official
                ? `${countrie.name.official} / ${countrie.name.common}`
                : countrie.name.official;

            return (
              <TableRow key={index}>
                <TableCell onClick={() => navigateToDetails(countrieName)}>
                  <ExternalLink>{countrieName}</ExternalLink>
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
                      {" "}
                      /{" "}
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
                <TableCell>
                  {Object.keys(countrie?.currencies || {}).map(
                    (currencyCode) => (
                      <span key={currencyCode}>
                        {countrie?.currencies?.[currencyCode]?.name} (
                        {countrie?.currencies?.[currencyCode]?.symbol})
                      </span>
                    )
                  )}
                </TableCell>
                <TableCell>{countrie?.population}</TableCell>
              </TableRow>
            );
          })}
        </tbody>
      </TableStyled>
    </TableContainer>
  );
};
