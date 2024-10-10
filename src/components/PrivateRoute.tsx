import { Navigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
  redirectTo?: string;
};

const PrivateRoute = ({ children, redirectTo = "/login" }: Props) => {
  const isLoggedIn = false;

  return isLoggedIn ? children : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
