import React from "react";
import { ThemeProvider } from "styled-components/macro";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

import Routes from "./Routes";
import Theme from "./Utils/theme";
import GlobalStyle from "./globalStyle";

import Login from "./Pages/Login";
import Dragons from "./Pages/Dragons";
import Edit from "./Pages/Dragons/Edit";
import Create from "./Pages/Dragons/Create";
import Details from "./Pages/Dragons/Details";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      localStorage.getItem("codUser") ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: Routes.login }} />
      )
    }
  />
);

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Route exact path="/">
          <Redirect to={{ pathname: Routes.login }} />
        </Route>
        <Route path={Routes.login} component={Login} />
        <PrivateRoute component={Dragons} path={Routes.dragons} />
        <PrivateRoute component={Create} path={Routes.create} />
        <PrivateRoute component={Details} path={Routes.detail} />
        <PrivateRoute component={Edit} path={Routes.edit} />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
