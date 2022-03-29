import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { createUploadLink } from "apollo-upload-client";

import App from "./components/App";
import withSession from "./components/withSession";
import Navbar from "./components/UI/Navbar/Navbar.component";
import SignIn from "./components/Auth/SignIn.component";
// import SignUp from "./components/Auth/SignUp.component";
// import Search from "./components/UI/Search/Search.component";
// import ProfilePage from "./pages/ProfilePage";
// import Dashboard from "./pages/Dashboard";
// import UploadPage from "./pages/UploadPage";
// import FileUpload from "./pages/FileUpload";
// import ProductPage from "./pages/ProductPage";
// import OutputChooserUI from "./pages/OutputChooserUI";

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

const Root = ({ refetch, session }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
  <Router>
    <Fragment>
      <Navbar session={session} />
      <Switch>
        <Route exact path="/" component={App} />
        {/* <Route path="/search" component={Search} /> */}
        <Route path="/signin" render={() => <SignIn refetch={refetch} />} />
        {/* <Route path="/signup" render={() => <SignUp refetch={refetch} />} />
        <Route
          path="/profile"
          render={() => <ProfilePage session={session} />}
        />
        <Route
          path="/dashboard"
          render={() => <Dashboard session={session} />}
        />
        <Route
          path="/product/upload"
          render={() => <FileUpload session={session} />}
        />
        <Route path="/product/:id" component={ProductPage} />
        <Route
          path="/outputchooserui"
          render={() => <OutputChooserUI session={session} />}
        /> */}
        <Redirect to="/" />
      </Switch>
    </Fragment>
  </Router>
)};

const RootWithSession = withSession(Root);

ReactDOM.render(
  <ApolloProvider client={client}>
    <RootWithSession />
  </ApolloProvider>,
  document.getElementById("root")
);
