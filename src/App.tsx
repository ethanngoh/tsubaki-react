import styled from "@emotion/styled";
import { HashRouter, Route, Routes } from "react-router-dom";
import SmoothScroll from "smooth-scroll";
import { Navigation } from "./components/navigation/navigation";
import { MonsterPage } from "./pages/monster";
import { OverviewPage } from "./pages/overview";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 750,
  speedAsDuration: true,
});

const BoundingBox = ({ maxWidth, children }: { maxWidth: string; children: React.ReactNode }) => {
  return <div style={{ width: "100%", maxWidth }}>{children}</div>;
};

const CenteredPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentContainer = styled.div`
  display: flex;
  margin: 1em;
`;

export const App = () => {
  return (
    <HashRouter>
      <CenteredPageContainer>
        <BoundingBox maxWidth={"1440px"}>
          <Navigation />
          <ContentContainer>
            <Routes>
              <Route index element={<OverviewPage />} />
              <Route path="/monster/:id" element={<MonsterPage />} />
            </Routes>
          </ContentContainer>
        </BoundingBox>
      </CenteredPageContainer>
    </HashRouter>
  );
};
