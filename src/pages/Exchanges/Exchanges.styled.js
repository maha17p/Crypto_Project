import styled from 'styled-components'
import {v,m,s, flexBetween, flexCenter, flexStart} from '../../styles/Variable.styled'
export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: ${v.mdSpacing};
`;
export const EHeader = styled.div`
    padding: ${v.mdSpacing};

    display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-auto-rows: 1rem;
    background: ${({ theme }) => theme.bg};
    box-shadow: ${v.boxShadowLight};
    border-radius: ${v.borderRadius};
    font-weight: 500;
    grid-gap: 1px;
`;
export const EHeadingItem = styled.p`
${flexCenter}

`;
export const EBody = styled.div`
    
`;
export const EBodyContainer = styled.div`
    ${flexCenter}

  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-auto-rows: 1rem;
`;
export const ETitle = styled.div`
    
`;
export const ERank = styled.span``;
export const EName = styled.span``;
export const EVolume = styled.div``;
export const EMarket = styled.div``;
export const EPrice = styled.div``;
export const ELogo = styled.img`
    height: 1rem;
    width: 1rem;
    object-fit: contain;
    `

