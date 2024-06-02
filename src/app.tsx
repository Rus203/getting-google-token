import { RouterProvider } from "react-router-dom";
import { router } from "./routers";
import { GoogleOAuthProvider } from "@react-oauth/google";

export const App = () => {
  return (
    <>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID} >
        <RouterProvider router={router} />
      </GoogleOAuthProvider>
    </>
  );
};
