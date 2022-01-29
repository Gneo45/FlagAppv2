import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    /*CREER UNE NAVIGATION */
    /*BROWSER ROUTEUR ENGLOBE TOUTE L'<APP> */
    /*switch vas TESTER LES ROUTES ? SI ELLE NE SONT PAS BONNE VA REDIRIGER SUR L4ERREUR 404 */
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/a-propos" exact component={About} />
        <Route component ={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
