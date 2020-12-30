import React, { EffectCallback, useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import CatDetails from "./pages/CatDetails";
import Home from "./pages/Home";
import TopSearch from "./pages/TopSearch";
import { connect } from "react-redux";
import { fetchTopSearched } from "./store/topSearchSlice";
import { fetchAllBreeds } from "./store/allBreedsSlice";
import ScrollToTop from "./components/ScrollToTop";

function App(props: { fetchTopSearched: Function; fetchAllBreeds: Function }) {
  useEffect(props.fetchTopSearched as EffectCallback, []); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(props.fetchAllBreeds as EffectCallback, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/top">
          <>
            <ScrollToTop />
            <TopSearch />
          </>
        </Route>
        <Route path="/:id">
          <>
            <ScrollToTop />
            <CatDetails />
          </>
        </Route>
        <Route path="/" exact>
          <>
            <ScrollToTop />
            <Home />
          </>
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

const mapStatetoProps = (state: any) => ({});

const mapDispatchToProps = { fetchTopSearched, fetchAllBreeds };

export default connect(mapStatetoProps, mapDispatchToProps)(App);
