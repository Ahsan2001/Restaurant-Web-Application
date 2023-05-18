import React from 'react';
import Layout from '../layout';
import {documentTitle} from '../utils/title';

const Login = () => {

  // page title 
  documentTitle("Login");

  return (
    <Layout>
        <h1>Login</h1>
    </Layout>
  )
}

export default Login