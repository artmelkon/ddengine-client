import React from "react";
import { withRouter } from "react-router-dom";
import { auth } from '../../firebase/firebase.utils';
import { ApolloConsumer } from "@apollo/client";

import Button from '../UI/Button/Button.component';

const handleSignout = (client, history) => {
  localStorage.setItem("token", '');
  client.resetStore();
  history.push("/signin");
  auth.signOut();
};

const SignOut = ({ history, className }) => (
  <ApolloConsumer>
    {(client) => {
      return (
        <Button
          to="/register"
          className={className}
          onClick={() => handleSignout(client, history)}
        >
          SIGN OUT
        </Button>
      );
    }}
  </ApolloConsumer>
);

export default withRouter(SignOut);
