import React, { EffectCallback, useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CatDetails from "./pages/CatDetails";
import Home from "./pages/Home";
import TopSearch from "./pages/TopSearch";
import { connect } from "react-redux";
import { fetchTopSearched } from "./store/topSearchSlice";
import { fetchAllBreeds } from "./store/allBreedsSlice";

function App(props: { fetchTopSearched: Function; fetchAllBreeds: Function }) {
  useEffect(props.fetchTopSearched as EffectCallback, []); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(props.fetchAllBreeds as EffectCallback, []); // eslint-disable-line react-hooks/exhaustive-deps

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

const mapStatetoProps = (state: any) => ({});

const mapDispatchToProps = { fetchTopSearched, fetchAllBreeds };

export default connect(mapStatetoProps, mapDispatchToProps)(App);
