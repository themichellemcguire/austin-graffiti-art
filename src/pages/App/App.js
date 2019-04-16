import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "../LoginPage/LoginPage";
import userService from "../../utils/userService";
import NavBar from "../../components/NavBar/NavBar";
import Gallery from "../Gallery/Gallery";
import NewArt from "../NewArt/NewArt";

class App extends Component {
  constructor() {
    super();
    this.state = {
      gallery: []
    };
  }

  /*--- Callback Methods ---*/

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  };

  /*--- Lifecycle Methods ---*/

  render() {
    return (
      <div>
        <header className="header-footer">Austin Graffiti Art</header>
        <Router>
          <NavBar />
          <Route
            exact
            path="/gallery"
            component = {Gallery}
          />
          <Route
            exact
            path="/newart/:id"
            render={() => <NewArt />}
          />
          <Switch>
            <Route
              exact
              path="/login"
              render={({ history }) => (
                <LoginPage
                  history={history}
                  handleSignupOrLogin={this.handleSignupOrLogin}
                />
              )}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
