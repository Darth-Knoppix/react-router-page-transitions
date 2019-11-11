import React from "react";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid bg-light" style={{ height: "100vh" }}>
        <div className="row">
          <nav
            className="col-6 col-sm-4 col-md-2 bg-dark py-5"
            style={{ height: "100vh" }}
          >
            <ul className="nav nav-pills flex-column">
              <li className="nav-item">
                <NavLink to="/" exact className="nav-link text-white">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link text-white">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/settings" className="nav-link text-white">
                  Settings
                </NavLink>
              </li>
            </ul>
          </nav>
          <main className="col-6 col-sm-8 col-md-10 py-5">
            <Switch>
              <Route path="/about" component={About} />
              <Route path="/settings" component={Settings} />
              <Route path="/" component={Home} />
            </Switch>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

function About() {
  return (
    <div>
      <h1>About</h1>
      <p>
        Let's animate transitions between React Router routes with Framer Motion
      </p>
      <h2>Framer Motion</h2>
      <p>
        Framer Motion is a great library for animations in React easily and
        quickly.
      </p>
      <h2>React Router</h2>
      <p>One of the most well known routers in the React ecosystem.</p>
    </div>
  );
}

function Settings() {
  return (
    <div className="row">
      <div className="col-md-8">
        <h1>Settings</h1>
        <form>
          <fieldset>
            <legend>Details</legend>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" className="form-control" />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" className="form-control" />
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend>Preferences</legend>
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                id="large-labels"
                className="custom-control-input"
              />
              <label htmlFor="large-labels" className="custom-control-label">
                Use Larger Labels
              </label>
            </div>
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                id="email-opt-in"
                className="custom-control-input"
              />
              <label htmlFor="email-opt-in" className="custom-control-label">
                Receive Notifications by Email
              </label>
            </div>
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                id="hide-profile-pic"
                className="custom-control-input"
              />
              <label
                htmlFor="hide-profile-pic"
                className="custom-control-label"
              >
                Show Profile Image
              </label>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>
        Let's animate transitions between React Router routes with Framer Motion
      </p>
    </div>
  );
}
export default App;
