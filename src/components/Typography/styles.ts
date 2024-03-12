import styled from "styled-components";
import { fontSize, grey, fontWeight } from "../../styles/theme";

const handleFontSize = (props: ITypographyProps): string => {
  switch (props.size) {
    case "xs":
      return fontSize.caption;
    case "sm":
      return fontSize.small;
    case "md":
      return fontSize.default;
    case "bg":
      return fontSize.heading;
    case "lg":
      return fontSize.heading2;
    case "xl":
      return fontSize.heading4;
    case "xxl":
      return fontSize.xl;
    default:
      return fontSize.default;
  }
};

export const StyledTypography = styled.p<ITypographyProps>`
  font-size: ${handleFontSize};
  color: ${({ color }) => (color ? color : grey.darkest)};
  font-weight: ${({ $weight }) => $weight ? $weight : fontWeight.light };
  text-transform: ${({ $isUppercase }) => $isUppercase && "uppercase"};
  text-align: ${({ textAlign }) => textAlign || ""};
  position: relative;
`;
