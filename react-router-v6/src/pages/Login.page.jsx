import React from "react";

import { Outlet } from "react-router-dom";
const Login = () => {
  return (
    <div>
      Login Page
      <Outlet />
    </div>
  );
};

export default Login;
