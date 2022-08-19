import styled, { css } from "styled-components";

export const v = {
  xsmSpacing: "0.25rem",
  smSpacing: "0.5rem",
  nlSpacing: "0.875rem",
  mdSpacing: "1rem",
  lgSpacing: "1.5rem",
  xlSpacing: "2rem",
  xxlSpacing: "3rem",
  letterSpacing: "0.2rem",

  borderRadius: "0.275rem",

  boxShadow: `0 1px 1px rgba(0,0,0,0.15),
    0 2px 2px rgba(0,0,0,0.15), 
    0 4px 4px rgba(0,0,0,0.15), 
    0 6px 6px rgba(0,0,0,0.15)
    `,
  boxShadowLight:`0 0 10px 1px rgba(0,0,0,0.2)`,
};

export const f = {
  poppins:`'Popins',sans-serif`,
  roboto:`'Roboto',sans-serif`
}

export const s = {
  sm: "600px",
  md: "768px",
  lg: "1024px",
  xl: "1200px",

  maxWidth: "1330px",
  sideBarWidth: "20rem",
};

export const m = {
  sm: `(min-width:${s.sm})`,
  md: `(min-width: ${s.md})`,
  lg: `(min-width:${s.lg})`,
  xl: `(min-width:${s.xl})`,
};

export const Container = styled.div`
  padding: 0 ${v.lgSpacing};
  font-size: ${v.nlSpacing};

  @media ${m.sm} {
    padding: 0 ${v.xlSpacing};
    font-size: ${v.mdSpacing};
  }
  @media ${s.lg} {
    padding: 0 ${v.xlSpacing};
  }
  @media ${s.xl} {
    padding: 0 ${v.xxlSpacing};
  }
`;

export const btnReset = css`
  outline: none;
  padding: 0;
  border: none;
  color: inherit;
  background: inherit;
  font-family: inherit;
  font-size: inherit;
  cursor: pointer;
`;


export const flexStart = css`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;


export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const flexBetween = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const flexEnd = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
