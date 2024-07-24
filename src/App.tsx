import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { defaulTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Home } from "./pages/Home";
import { DefaultLayout } from "./layouts/DefaultLayout";

export function App() {
  return (
    <ThemeProvider theme={defaulTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  );
}
