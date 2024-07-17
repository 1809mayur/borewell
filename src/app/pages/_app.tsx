import { AppProps } from "next/app";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import MainLayout from "./../layout";

import { theme } from "./../utils/theme";
import "../styles/global.scss";

/**
 * Renders the main application component.
 * @param props - The component props.
 * @param props.Component - The component to render.
 * @param props.pageProps - The page props.
 * @returns The rendered application component.
 */
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ThemeProvider>
  );
}

export default MyApp;
export { MyApp };
