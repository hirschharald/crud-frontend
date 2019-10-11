import React from "react";
import HomePage from "./../home";
import AgentenPage from "./../agenten";
import RufnummernPage from "./../rufnummern";
import MandantenPage from "./../mandanten";
import AgentlogPage from "./../agentlog";
import { Switch, Route, Router } from "./../../util/router.js";
import "./styles.scss";

function App(props) {
  return (

      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/agenten" component={AgentenPage} />
          <Route exact path="/rufnummern" component={RufnummernPage} />
          <Route exact path="/mandanten" component={MandantenPage} />
          <Route exact path="/agentlog" component={AgentlogPage} />
//
          <Route
            component={({ location }) => {
              return (
                <div
                  style={{
                    padding: "50px",
                    width: "100%",
                    textAlign: "center"
                  }}
                >
                  The page <code>{location.pathname}</code> could not be found.
                </div>
              );
            }}
          />
        </Switch>
      </Router>
  
  );
}

export default App;
