import { Toast } from "./components/Toast";
import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { InjectedMonsterView } from "views/MonsterView";

const AppContainer = styled.div`
  display: flex;
  justifycontent: center;
`;

const AppContainerInner = styled.div`
  maxwidth: 1200px;
  width: 100%;
  padding: 1rem;
`;

export default function App() {
  return (
    <AppContainer>
      <AppContainerInner>
        <Router>
          <Toast />
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/monster">View Monster</Link>
                </li>
              </ul>
            </nav>
            <Routes>
              <Route path="/monster/:id" element={<InjectedMonsterView />}></Route>
            </Routes>
          </div>
        </Router>
      </AppContainerInner>
    </AppContainer>
  );
}
