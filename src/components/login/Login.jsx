import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext";

const Login = () => {
  const { login } = React.useContext(UserContext);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (login) {
      navigate("/conta");
    }
  }, [login, navigate]);
  return (
    <>
      <Outlet />
    </>
  );
};

export default Login;
