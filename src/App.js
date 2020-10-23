import React, { Fragment, useState } from "react";
import styled from "styled-components/macro";
import { GlobalStyle } from "./styles";

import { ProfilePage, LoginPage } from "./pages";

const AppContainer = styled.div`
  height: 100%;
  min-height: 100vh;
`;

export default function App() {
  const [token, setToken] = useState("");

  return (
    <Fragment>
      <AppContainer>
        <GlobalStyle />
        {token ? <ProfilePage /> : <LoginPage />}
      </AppContainer>
    </Fragment>
  );
}
