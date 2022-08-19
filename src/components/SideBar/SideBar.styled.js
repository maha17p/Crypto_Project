import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  v,
  s,
  flexCenter,
  flexStart,
  btnReset,
  flexBetween,
  flexEnd,
} from "../../styles/Variable.styled";

export const SSideBar = styled.div`

  width: ${({ isOpen }) => (!isOpen ? "auto" : s.sideBarWidth)};
  height: 100vh;
  background: ${({ theme }) => theme.bg};
  padding: ${v.xlSpacing} ${({ isOpen }) => (!isOpen ? v.nlSpacing: v.xlSpacing)};
`;

export const Divider = styled.div`
  border: 1px solid ${({ theme }) => theme.bg2};
  width: 100%;
  margin: ${v.lgSpacing} 0;
`;

export const SSideLogo = styled(Link)`
  ${flexStart}
  text-transform: uppercase;
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  width: 100%;
`;
export const SLogo = styled.div`
  ${flexCenter}
  font-size: ${v.xlSpacing};
`;
export const SLogoName = styled.span`
  font-size: ${v.lgSpacing};
  letter-spacing: ${v.letterSpacing};
  margin-left: ${v.smSpacing};
`;
export const SSeachContainer = styled.div`
  ${flexStart}
  border: 1px solid ${({ theme }) => theme.bg3};
  width: 100%;
  padding: ${v.xsmSpacing} ${v.xsmSpacing};
  border-radius: ${v.borderRadius};
`;
export const SSearchIcon = styled.span`
  ${flexCenter}
  font-size: ${v.mdSpacing};
  cursor: pointer;
`;
export const SSearchInput = styled.input`
  ${btnReset}
  padding:0  ${v.mdSpacing};
  letter-spacing: 1px;
`;

export const SLinkContainer = styled.div`
  width: 100%;
`;
export const SLink = styled(Link)`
  ${flexBetween}
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  margin: ${v.nlSpacing} 0;
`;
export const SLinkLogo = styled.span`
  font-size: calc(${v.lgSpacing} - ${v.xsmSpacing});
`;
export const SLinkLabel = styled.label`
  ${flexCenter}
  font-size: ${v.mdSpacing};
  letter-spacing: 1px;
  cursor: pointer;
  flex: 1;
`;
export const SLinkNotify = styled.button`
  ${btnReset}
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.bg};
  font-size: ${v.nlSpacing};
  padding: 0px 3px;
  border-radius: ${v.borderRadius};
`;
export const STheme = styled.div`
  ${flexBetween}
`;
export const SThemeLabel = styled.span`
  text-align: center;
  flex: 1;

  &::before {
    content: " ";
    margin: 0 1.5rem;
  }
`;
export const SThemeToggler = styled.span`
  width: ${v.xlSpacing};
  height: ${v.mdSpacing};
  position: relative;
  border-radius: ${v.smSpacing};
  background-color: ${({ theme }) => theme.bg3};
`;

export const SThemeThumb = styled.span`
  height: ${v.mdSpacing};
  width: ${v.mdSpacing};
  position: absolute;
  background-color: ${({ theme }) => theme.bg};
  top: 0;
  right: 0;
  border-radius: 50%;
`;
