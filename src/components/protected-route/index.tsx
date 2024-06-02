import { ComponentType, useEffect } from "react";
import { useBoundStore } from "../../zustand";
import { useNavigate } from "react-router-dom";

type Prop = {
  component: ComponentType;
};

export const ProtectedRoute = ({ component: Component }: Prop) => {
  const navigate = useNavigate();
  const credentials = useBoundStore((state) => state.credentials);

  useEffect(() => {
    if (!credentials) {
      navigate("/");
    }
  });

  return <Component />;
};
