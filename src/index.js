import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { createUploadLink } from "apollo-upload-client";
import {BrowserRouter as Router} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";


import { AuthProvider } from "./context/auth-context";
import App from "./App";
import "./assets/scss/style.scss";

const httpLink = createUploadLink({
  uri: "http://localhost:4040/graphql",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <AuthProvider>
    <ApolloProvider client={client}>
      <Router>
        <App />
      </Router>
    </ApolloProvider>
  </AuthProvider>,
  document.getElementById("root")
);