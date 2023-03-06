import { useCallback, useReducer } from "react";
import { Home } from "../pages/Home";

interface RouteProps {
  path: string;
  element: JSX.Element;
}

interface onNavigateProps {
  (pathname: string): void;
}

export const routes = [
  { path: "/", element: <Home /> },
  { path: "*", element: <div>404 not found</div> },
] as RouteProps[];

export const useRoutes = () => { 
const [route, dispatch] = useReducer(routesReducer, undefined, () => {
    const pathname = window.location.pathname;
    const route = routes.find(route => route.path === pathname);
    if (route) {
      return route;
    }
    const fallbackRoute = routes.find(route => route.path === '/');
    return fallbackRoute || routes[0];
  });

  const onNavigate = useCallback<onNavigateProps>(
    (pathname: string) => {
      if (pathname.startsWith("/")) {
        window.history.pushState(null, "", pathname);
        const route = routes.find(route => route.path === pathname);
        dispatch(route || routes[0]);
      }
    },
    [dispatch]
  );

  return { route, onNavigate };
};

const routesReducer = (_state: RouteProps, action: RouteProps) => action;