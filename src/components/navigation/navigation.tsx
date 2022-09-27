import styled from "@emotion/styled";
import React from "react";
import { ColorKey, getColor } from "../../colors";
import { SearchInput } from "../search";

const NavTop = styled.div`
  width: 100%;
  background-color: ${getColor(ColorKey.NAV_BACKGROUND)};
`;
const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 0.5em 2em;
`;

const NavLeft = styled.nav`
  display: flex;
`;

const NavRight = styled.nav`
  display: flex;
`;

const Nav = ({
  left,
  right,
}: {
  left: React.ReactNode;
  right: React.ReactNode;
}) => {
  return (
    <NavTop>
      <NavContainer>
        <NavLeft>{left}</NavLeft>
        <NavRight>{right}</NavRight>
      </NavContainer>
    </NavTop>
  );
};

const NavLink = styled.a`
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 16px;
  font-weight: 300;
  border-radius: 0;
  margin: 0em 1.5em 0 0;
  text-decoration: none;
`;

export const Navigation = () => {
  return (
    <Nav
      left={
        <SearchInput
          placeholder="Search Bar"
          setName={() => {}}
          names={["test", "test2"]}
        />
      }
      right={
        <>
          <NavLink>Some Link</NavLink>
        </>
      }
    />
  );
};
