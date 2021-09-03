import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { ReactQueryDevtools } from "react-query-devtools";
import Routes from "./container/Routes";
import { QueryCache, ReactQueryCacheProvider } from "react-query";

const queryCache = new QueryCache();

function App() {

  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <Router>
        <Switch>
          <Routes />
        </Switch>
      </Router>
      <ReactQueryDevtools initialIsOpen />
    </ReactQueryCacheProvider>
  );
}

export default App;