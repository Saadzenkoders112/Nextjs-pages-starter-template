// React Imports
import React, { Fragment, useEffect } from "react";

// View Import
import LoginView from "../views/Authentication/Login";

// Next JS Imports
import Head from "next/head";

const Login = () => {
  return (
    <Fragment>
      <Head>
        <title>Login</title>
      </Head>
      <LoginView />
    </Fragment>
  );
};

export default Login;
