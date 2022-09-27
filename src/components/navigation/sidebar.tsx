import styled from "@emotion/styled";
import React from "react";
import { Link } from "react-router-dom";

import { ColorKey, getColor } from "../../colors";
import { NavBrand } from "./navbrand";
import { GoLightBulb, GoHome } from "react-icons/go";

type SidebarProps = {
  width: string;
};

const NavFixedPositon = styled.div<SidebarProps>`
  position: fixed;
  height: 100vh;
  max-width: 1440px;
  top: 0;
  background: ${getColor(ColorKey.SEARCH_BACKGROUND)};
  width: ${(props) => props.width};
`;

const DeadSpace = styled.div`
  width: 18vw;
`;

const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 1em 1em;
`;

const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-weight: 300;
  border-radius: 0;
  text-decoration: none;
  color: ${getColor(ColorKey.SIDEBAR_TEXT)};
  background: ${getColor(ColorKey.NAV_BACKGROUND)};
  padding: 0.7rem;
  gap: 1rem;
`;

const HR = styled.hr`
  border: 0;
  border-bottom: 1px solid ${getColor(ColorKey.LOGO)};
  width: 100%;
`;

export const Sidebar = ({ width }: { width: string }) => {
  return (
    <>
      <NavFixedPositon width={width}>
        <NavContainer>
          <NavBrand />
          <HR />
          <NavLinks>
            <NavLink to="/">
              <GoHome size={"1rem"} />
              Home
            </NavLink>
            <NavLink to="/lights">
              <GoLightBulb size={"1rem"} />
              Lights
            </NavLink>
          </NavLinks>
        </NavContainer>
      </NavFixedPositon>
    </>
  );
};
