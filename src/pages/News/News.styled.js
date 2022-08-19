import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  v,
  s,
  m,
  flexBetween,
  flexCenter,
  flexStart,
} from "../../styles/Variable.styled";

export const Wrapper = styled.div`
  margin-top: ${v.lgSpacing};
`;

export const DContainer = styled.div`
  ${flexCenter}
  width: 100%;
`;
export const DSelectBox = styled.div`
  width: 400px;
  padding: ${v.mdSpacing};
  position: relative;
`;
export const DSelected = styled.div`
  ${flexBetween}
  background: ${({ theme }) => theme.bg};
  box-shadow: ${v.boxShadow};
  border-radius: ${v.borderRadius};
  padding: ${v.smSpacing} ${v.mdSpacing};

  & > svg {
    font-size: ${v.lgSpacing};
  }
`;
export const DInput = styled.input`
  border: none;
  outline: none;
  letter-spacing: 1px;
  font-size: ${v.nlSpacing};
`;
export const OptionContainer = styled.div`
  background: ${({ theme }) => theme.bg};
  box-shadow: ${v.boxShadow};
  border-radius: ${v.borderRadius};
  margin: 0 ${v.mdSpacing};
  overflow-y: scroll;
  height: 200px;
  position: absolute;
  right: 0;
  left: 0;
  top: 90%;
`;
export const OptionLabel = styled.div`
  padding: ${v.smSpacing} ${v.mdSpacing};
  cursor: pointer;
  transition: 0.3s linear;
  &:hover {
    background: ${({ theme }) => theme.bg3};
  }
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
  grid-template-columns: repeat(1, 1fr);
  grid-auto-rows: 250px;
  grid-gap: 1rem;

  @media ${m.md} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${m.lg} {
    grid-template-columns: repeat(3, 1fr);
  }
`;
export const MainContent = styled.a`
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
  display: flex;
`;
export const SName = styled.p`
  color: ${({ theme }) => theme.text};
  font-weight: 500;
  font-size: ${v.nlSpacing};
  text-align: justify;
`;
export const SImage = styled.img`
  height: 5rem;
  width: 5rem;
  object-fit: contain;
  border-radius: ${v.borderRadius};
  margin-left: ${v.nlSpacing};
`;
export const SDivider = styled.div`
  border: 1px solid ${({ theme }) => theme.lightGray};
  margin: ${v.mdSpacing} 0;
`;
export const SBody = styled.div``;
export const Description = styled.p`
  color: ${({ theme }) => theme.gray};
  font-weight: 500;
  font-size: ${v.nlSpacing};
  text-align: justify;
`;
export const ProviderContainer = styled.div`
  ${flexBetween}
  color: ${({ theme }) => theme.gray};
  font-weight: 500;
  font-size: ${v.smSpacing};
  margin: 1rem 0;
`;
export const LabelContainer = styled.div`
  ${flexStart}
`;
export const PImage = styled.img`
  height: 1rem;
  width: 1rem;
  object-fit: cover;
  border-radius: ${v.borderRadius};
  margin-right: ${v.nlSpacing};
`;
export const PName = styled.p``;
export const PTime = styled.p``;
