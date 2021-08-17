import Layout from "../components/Layout";

import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styledComponents/GlobalStyles";
import "../styles/globals.css";
// import "boxicons";
// import "boxicons/css/boxicons.min.css";

const themes = {
  mainFontColor: `#f5f5f5`,
};

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <ThemeProvider theme={themes}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </Layout>
  );
}

export default MyApp;
