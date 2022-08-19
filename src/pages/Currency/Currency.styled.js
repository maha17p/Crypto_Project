import styled from "styled-components";
import { Link } from "react-router-dom";
import { v, s, m, flexBetween, flexCenter } from "../../styles/Variable.styled";

export const Wrapper = styled.div`
  margin-top: ${v.lgSpacing};
`;

export const SearchContainer = styled.div`
  ${flexCenter}
  margin-bottom: ${v.mdSpacing};
`;
export const Input = styled.input`
  outline: none;
  border: none;
  padding: ${v.nlSpacing} ${v.xxlSpacing};
  border-radius: ${v.borderRadius};
  font-size: ${v.nlSpacing};
  letter-spacing: 1px;
`;

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 200px;
  grid-gap: 1rem;

  @media ${m.md} {
    grid-template-columns: repeat(3, 1fr);
  }
  @media ${m.lg} {
    grid-template-columns: repeat(4, 1fr);
  }
`;
export const MainContent = styled(Link)`
  box-shadow: ${v.boxShadow};
  border-radius: ${v.borderRadius};
  background: ${({ theme }) => theme.bg};
  text-decoration: none;


  padding: 1rem 2rem;

  &:hover {
    background: ${({ theme }) => theme.bg3};
    transition: 0.3s ease-in-out;
  }
`;
export const STop = styled.div`
  ${flexBetween}
`;
export const SName = styled.p`
    color: ${({ theme }) => theme.text};
  font-weight: 500;
  font-size: ${v.nlSpacing};
`;
export const SImage = styled.img`
  height: 2.5rem;
  width: 2.5rem;
`;
export const SDivider = styled.div`
  border: 1px solid ${({ theme }) => theme.lightGray};
  margin: ${v.mdSpacing} 0;
`;
export const SBody = styled.div`
  color: ${({ theme }) => theme.gray};

`;
export const SPrice = styled.p``;
export const SMarketCup = styled.p``;
export const SDailyChange = styled.p``;
