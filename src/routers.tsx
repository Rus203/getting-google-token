import { createBrowserRouter } from "react-router-dom";
import { AccessToken, Home, Root } from "./pages";
import { ProtectedRoute } from "./components";

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
        element: <ProtectedRoute component={AccessToken} />,
      },
    ],
  },
]);
