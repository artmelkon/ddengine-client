import React, { Fragment, useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Container } from "react-bootstrap";

import { AuthContext } from "./context/auth-context";
import Navigation from "./components/UI/Navbar/Navigation";
import SignIn from "./components/Auth/SignIn.component";
import SignUp from "./components/Auth/SignUp.component";
import HomePage from "./pages/HomePage";
// import ProductItem from "./Product/ProductItem.component";
import Search from "./components/UI/Search/Search.component";
import ProfilePage from "./Profile";
import Dashboard from "./Dashboard";
import UploadPage from "./pages/UploadPage";
// import ProductPage from "./pages/ProductPage";
import FileManager from './FileManager';
import HubChooser from "./Chooser";

import "bootstrap/dist/css/bootstrap.min.css";

const App = (props) => {
  const authCtx = useContext(AuthContext);
  return (
    <Fragment>
      <Navigation />
      <Container>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/search" component={Search} />
          <Route path="/dashboard" component={Dashboard} />
          {!authCtx.user && <Route path="/login" component={SignIn} />}
          {!authCtx.user && <Route path="/register" component={SignUp} />}
          {authCtx.user ? (
            <Route path="/filemanager" component={FileManager} />
          ) : (
            <Redirect to="/login" />
          )}{" "}
          {authCtx.user ? (
            <Route path="/hubchooser" component={HubChooser} />
          ) : (
            <Redirect to="/login" />
          )}
          {authCtx.user ? (
            <Route path="/upload" component={UploadPage} />
          ) : (
            <Redirect to="/login" />
          )}
          {authCtx.user ? (
            <Route path="/profile" component={ProfilePage} />
          ) : (
            <Redirect to="/login" />
          )}
          <Redirect to="/" />
        </Switch>
      </Container>
    </Fragment>
  );
};

export default App;
