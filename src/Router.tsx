import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout/index";
import { Home } from "./pages/Home/index";

export function Router() {
  return (
    <Routes>
      <Route path="/capela-dos-milagres" element={<DefaultLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}
