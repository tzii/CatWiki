import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CatDetails from "./pages/CatDetails";
import Home from "./pages/Home";
import TopSearch from "./pages/TopSearch";

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/top" component={TopSearch} />
        <Route path="/:id" component={CatDetails} />
        <Route path="/" exact component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}
