import styled from "styled-components";
import { Link } from "react-router-dom";
import { palette } from "../../../../styles/theme";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  justify-content: center;
  background-color: ${palette.primary.default};
  padding: 1.25rem;
  gap: 0.5rem;
  border-radius: 10px;
  text-align: center;

  max-width: 50%;
`;

export const IllustrationImage = styled.img`
  max-width: 25rem;
  max-height: 25rem;
  margin: 4rem 0;

  @media screen and (max-width: 767px) {
    max-width: 250px;
    max-height: 250px;
  }
`;

export const DiscoverButton = styled(Link)`
  margin-top: 1.25rem;
  padding: 0.6rem 1.25rem;
  background-color: ${palette.grey.white};
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  max-width: 30%;

  &:hover {
    background-color: ${palette.grey.lighter};
  }
`;
