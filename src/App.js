import React, { Fragment, useContext } from "react";
import { Switch, Route, Redirect, useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

import { AuthContext } from "./store/auth-context";
import Navigation from "./components/UI/Navbar/Navigation";
import SignIn from "./components/Auth/SignIn.component";
import SignUp from "./components/Auth/SignUp.component";
import HomePage from "./pages/Home";
import Search from "./components/UI/Search";
import ProfilePage from "./pages/Profile"
import Upload from "./components/UI/Upload";
import FileManager from './pages/FileManager';
// import Folder from './FileManager/Folder';
import HubManager from "./pages/HubManager";

import "bootstrap/dist/css/bootstrap.min.css";

const App = (props) => {
  const authCtx = useContext(AuthContext);
  let {_id} = useParams()
  return (
    <Fragment>
      <Navigation />
      <Container>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/search" component={Search} />
          {!authCtx.user && <Route path="/login" component={SignIn} />}
          {!authCtx.user && <Route path="/register" component={SignUp} />}
          {authCtx.user ? (
            <Route
              path="/root/:id"
              children={<FileManager />}
            />
          ) : (
            <Redirect to="/login" />
          )}
          {/* {authCtx.user ? (<Route path="/file/:_id" component={Folder} />
          ) : (
            <Redirect to="/login" />
          )} */}
          {authCtx.user ? (
            <Route path="/hubroot" component={HubManager} />
          ) : (
            <Redirect to="/login" />
          )}
          {authCtx.user ? (
            <Route path="/upload" component={Upload} />
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
