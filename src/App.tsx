import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CatDetails from "./pages/CatDetails";
import Home from "./pages/Home";

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/:id" component={CatDetails} />
        <Route path="/" exact component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}
