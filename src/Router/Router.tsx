import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "../Layout";
import { routes } from "./routes";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Route>
    </Routes>
  );
}
