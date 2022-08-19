import React, { useState } from "react";
import {
  SSideBar,
  SSideLogo,
  SLogo,
  SLogoName,
  SSeachContainer,
  SSearchIcon,
  SSearchInput,
  Divider,
  SLinkContainer,
  SLink,
  SLinkLogo,
  SLinkLabel,
  SLinkNotify,
  STheme,
  SThemeLabel,
  SThemeToggler,
  SThemeThumb,
} from "./SideBar.styled";
import { sideBarLinks } from "../../constants/SideBarLinks";

const SideBar = () => {
  const { logo, search, sideBarArr, settingBarArr } = sideBarLinks;
  const [sideBarOpen, setSideBarOpen] = useState(false);

  return (
    <SSideBar isOpen={sideBarOpen}>
      <SSideLogo to={logo.link}>
        <SLogo style={!sideBarOpen ? { marginLeft: "-0.5rem" } : {}}>
          {logo.icon}
        </SLogo>
        {sideBarOpen && (
          <>
            <SLogoName>{logo.label}</SLogoName>
          </>
        )}
      </SSideLogo>
      <Divider />
      <SSeachContainer style={!sideBarOpen ? { width: "fit-content" } : {}}>
        <SSearchIcon style={sideBarOpen ? { marginLeft: "1rem" } : {}}>
          {search.icon}
        </SSearchIcon>
        <SSearchInput
          style={!sideBarOpen ? { width: 0, padding: 0 } : {}}
          placeholder={search.label}
        />
      </SSeachContainer>
      <Divider />
      {sideBarArr.map(({ label, icon, link, id, notify }) => {
        return (
          <SLinkContainer key={id}>
            <SLink
              style={!sideBarOpen ? { width: "fit-content" } : {}}
              to={link}
            >
              <SLinkLogo>{icon}</SLinkLogo>
              {sideBarOpen && (
                <>
                  <SLinkLabel>{label}</SLinkLabel>
                  <SLinkNotify>{notify}</SLinkNotify>
                </>
              )}
            </SLink>
          </SLinkContainer>
        );
      })}
      <Divider />
      {settingBarArr.map(({ label, icon, link, id }) => {
        return (
          <SLinkContainer key={id}>
            <SLink to={link}>
              <SLinkLogo>{icon}</SLinkLogo>
              {sideBarOpen && (
                <>
                  <SLinkLabel>{label}</SLinkLabel>
                </>
              )}
            </SLink>
          </SLinkContainer>
        );
      })}
      <Divider />
      <STheme>
        {sideBarOpen && (
          <>
            <SThemeLabel>Dark Mode</SThemeLabel>
          </>
        )}

        <SThemeToggler>
          <SThemeThumb />
        </SThemeToggler>
      </STheme>
    </SSideBar>
  );
};

export default SideBar;
