import styled from "@emotion/styled";
import { ColorKey, COLORS, getColor } from "../../colors";

const NavBrandLink = styled.a`
  text-decoration: none;
`;

const NavBrandTextContainer = styled.div`
  display: block;
  letter-spacing: 0.05rem;
  text-align: left;
  vertical-align: middle;
  line-height: 0.85;
`;

const NavBrandText = styled.div`
  font-size: 24px;
  font-weight: 500;
  color: ${getColor(ColorKey.LOGO)};
`;

const NavBrandImg = styled.img`
  width: 40px;
  margin-right: 0.6em;
`;

const NavBrandContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const NavBrand = () => {
  return (
    <NavBrandContainer>
      <NavBrandImg src="img/logo-bw.svg" width="40px" alt="logo" />
      <NavBrandLink href="#page-top">
        <NavBrandTextContainer>
          <NavBrandText>HomeWeb</NavBrandText>
          <NavBrandText>@ 10524</NavBrandText>
        </NavBrandTextContainer>
      </NavBrandLink>
    </NavBrandContainer>
  );
};
