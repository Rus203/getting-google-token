import { createBrowserRouter } from "react-router-dom";
import { AccessToken, Home, Root } from "./pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/access-token",
        element: <AccessToken />,
      },
    ],
  },
]);
