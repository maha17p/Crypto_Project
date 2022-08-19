import React from "react";
import { ThemeProvider } from "styled-components";
import { Helmet } from "react-helmet";
import Layout from "./components/Layout/Layout";
import Router from "./Router";
import GlobalStyle from "./styles/Global.styled";
import { lightTheme } from "./styles/Theme.styled";

const styleTheme = lightTheme;
const App = () => {
  return (
    <ThemeProvider theme={styleTheme}>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&family=Roboto:wght@100;300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyle />
      <Layout>
        <Router />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
