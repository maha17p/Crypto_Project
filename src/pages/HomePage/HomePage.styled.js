import styled from "styled-components";
import { v, s, m,flexCenter, flexBetween } from "../../styles/Variable.styled";

export const Wrapper = styled.div`
`;
export const STitle = styled.p`
  ${flexCenter}
  width: 100%;
  padding: 1rem 0;
  font-size: ${v.lgSpacing};
  font-weight: 500;
`;
export const TCurrency = styled.div``;
export const TExchange = styled.div``;
export const TMarketCup = styled.div``;
export const TVolume = styled.div``;
export const TMarkets = styled.div``;
export const TCurrencyRate = styled.div``;

export const SMainContent = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 100px;
  grid-gap: 0.5rem;

   @media ${m.md}{
  grid-template-columns: repeat(4, 1fr);
  
   }
   @media ${m.lg}{
  grid-template-columns: repeat(6, 1fr);
   }
  & > div { 
    ${flexCenter}
    flex-direction: column;
    background: ${({ theme }) => theme.bg};
    box-shadow: ${v.boxShadowLight};
    border-radius: ${v.borderRadius};
  }
`;
export const TLabel = styled.p`
  margin-bottom: ${v.smSpacing};
  font-weight: 500;
  text-align: center;
`;
export const TValue = styled.span`
  letter-spacing: 1px;
  color: ${({ theme }) => theme.gray};
`;

export const TopItems = styled.div`
  ${flexBetween}
  margin-top: ${v.mdSpacing};
  background: ${({ theme }) => theme.bg};
  box-shadow: ${v.boxShadowLight};
  border-radius: ${v.borderRadius};
  padding: 1rem 1rem;
  & > a {
    text-decoration: none;

  }
`;
export const TCTitle = styled.p`
  font-size: ${v.mdSpacing};
  font-weight: 500;
  letter-spacing: 1px;
  flex: 1;
  text-align: center;
  padding-right: ${v.nlSpacing};

  @media ${m.md}{
    text-align: start;
  
   }
  
`;
