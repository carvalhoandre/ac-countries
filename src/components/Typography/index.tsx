import { StyledTypography } from "./styles";

export const Typography = (props: ITypographyProps): JSX.Element => {
  return <StyledTypography {...props}>{props.children}</StyledTypography>;
};
