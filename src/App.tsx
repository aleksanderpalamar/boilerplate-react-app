import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import ErrorBoundary from "./ErrorBoundary";
import { Home } from "./pages/Home";
import Router from "./Router/Router";
import { GlobalStyles } from "./styles/global";
import { defaultTheme } from "./styles/theme/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <ErrorBoundary>
          <Router />
        </ErrorBoundary>
      </BrowserRouter>
    </ThemeProvider>
  );
}
