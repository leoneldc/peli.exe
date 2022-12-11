//librerias
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//componentes
import Login from "./Public/views/Login";
import Logout from "./Private/views/Logout";
import SideBar from "./components/SideBar";
import Home from "./Private/views/Home";

import AuthContextProvider from "./settings/contexts/AuthContext";
import PrivateAuth from "./settings/paths/PrivateAuth";
import PublicAuth from "./settings/paths/PublicAuth";
import PublicNotFound from "./settings/paths/PublicNotFound";
//url
import { logout, all, home, login, notfound } from "./settings/paths/Paths";
//css
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <React.StrictMode>
      <Router>
        <Routes>

          <Route path={home} element={ <PrivateAuth><SideBar ><Home/></SideBar> </PrivateAuth> }>
          </Route>
          <Route path={logout} element={ <PrivateAuth> <Logout/> </PrivateAuth> }>
          </Route>

          <Route path={login || all}>
            <Route path={login} element={ <PublicAuth> <Login /> </PublicAuth> } />
          </Route>

          <Route path={notfound} element={ <PublicNotFound /> } />

        </Routes>
      </Router>
    </React.StrictMode>
  </AuthContextProvider>
);
