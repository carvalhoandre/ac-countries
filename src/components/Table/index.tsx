import { useNavigate } from "react-router-dom";

import { ITableProps } from "./types";
import { formatNumber } from "../../helpers/numbers";

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
    const countrySlug = countrie.replace(/ /g, "-");

    navigate(`/details/${countrySlug}`);
  };

  const titles = [
    "País",
    "Bandeira",
    "Capital",
    "Região",
    "Idiomas",
    "Links Mapas",
    "Moeda",
    "População",
  ];

  return (
    <TableContainer>
      <TableStyled>
        <TableHead>
          <TableRow>
            {titles.map((title, index) => (
              <TableHeaderCell key={index}>
                <Typography>{title}</Typography>
              </TableHeaderCell>
            ))}
          </TableRow>
        </TableHead>

        <tbody>
          {countries?.map((countrie, index) => {
            const countrieName =
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
                <TableCell>{formatNumber(countrie.population)}</TableCell>
              </TableRow>
            );
          })}
        </tbody>
      </TableStyled>
    </TableContainer>
  );
};
