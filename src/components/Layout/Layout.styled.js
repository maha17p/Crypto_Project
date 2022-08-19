import styled from "styled-components";
import { s, v } from "../../styles/Variable.styled";

export const SLayout = styled.div`

  width: 100%;
  display: flex;
  background: ${({theme}) => theme.bg3};
`;
export const SMain = styled.div`
  width: 100%;
  margin: ${v.mdSpacing};
  
`;
