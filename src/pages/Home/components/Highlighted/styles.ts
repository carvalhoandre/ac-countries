import styled from "styled-components";
import { Link } from "react-router-dom";
import { palette } from "../../../../styles/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: center;
  background-color: ${palette.primary.default};
  padding: 20px;
  border-radius: 10px;
  text-align: center;
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
  margin-top: 20px;
  padding: 10px 20px;
  background-color: ${palette.grey.white};
  color: ${palette.primary.default};
  text-decoration: none;
  border-radius: 5px;
  font-size: 1.2rem;
  transition: background-color 0.3s ease;

  max-width: 30%;

  &:hover {
    background-color: ${palette.grey.lighter};
  }
`;
