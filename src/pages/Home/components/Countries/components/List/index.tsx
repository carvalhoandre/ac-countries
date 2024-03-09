import { IListProps } from "./types";

import * as styles from "./styles";
import { Typography } from "../../../../../../components/Typography";

export const List = ({ countries }: IListProps): JSX.Element => {
  return (
    <styles.Column>
      {countries.map((countrie, index) => (
        <styles.Card key={index}>
          <styles.Row>
            <Typography $weight={600} size="bg">
              {countrie.name.official}
            </Typography>

            <styles.FlagImage
              src={countrie.flags.svg}
              alt={countrie.flags.alt}
            />
          </styles.Row>

          <styles.Row>
            {countrie?.capital && (
              <Typography $weight={300} size="md">
                {`Capital:  ${Object.values(countrie.capital).join(", ")}`}
              </Typography>
            )}
          
            {countrie?.capital && (
              <Typography $weight={300} size="md">
                {`Idiomas:  ${Object.values(countrie.languages).join(", ")}`}
              </Typography>
            )}
          </styles.Row>
        </styles.Card>
      ))}
    </styles.Column>
  );
};
