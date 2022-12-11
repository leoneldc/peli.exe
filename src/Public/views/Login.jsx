import React from "react";
import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import { api_img_fz, api_key, api_URL } from "../../settings/api/Apiconfig";
import FavTheme from "../../settings/contexts/FavTheme";
import useAuthContext from "../../settings/hooks/useAuthContext";
import "../style/login.css";

function Login(params) {
  const complete_url = "movie/popular";
  const [portada, setPortada] = useState();
  const [theme, handleChange] = FavTheme();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuthContext();

  function buscarPortada() {
    fetch(`${api_URL}${complete_url}${api_key}`)
      .then((res) => res.json())
      .then((data) => {
        setPortada(api_img_fz + data.results[0].backdrop_path);
      });
  }

  useEffect(() => {
    buscarPortada();

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const toggleSignup = () => {
    document.getElementById("login-toggle").style.background =
      "var(--bg-btn-login)";
    document.getElementById("signup-toggle").style.background =
      "var(--background)";
    document.getElementById("signup-toggle").style.color =
      "var(--text-primary)";
    document.getElementById("login-form").style.display = "none";
    document.getElementById("signup-form").style.display = "block";
  };

  const toggleLogin = () => {
    document.getElementById("login-toggle").style.background =
      "var(--background)";
    document.getElementById("login-toggle").style.color = "var(--text-primary)";
    document.getElementById("signup-toggle").style.background =
      "var(--bg-btn-login)";
    document.getElementById("signup-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";
  };

  function toggleTheme(e) {
    if (e.target.checked) {
      handleChange("dark");
    } else {
      handleChange("light");
    }
  }

  function handleUserChange(event) {
    setUser(event.target.value);
  }
  function hanblePasswordChange(event) {
    setPassword(event.target.value);
  }

  function submitLogin(event) {
    event.preventDefault();
    console.log(user + " " + password );
    if (user === "user" && password === "12345") {
      login();
    }
  }

  return (
    <div
      data-theme={theme}
      className="container-login"
      style={{ backgroundImage: `url(${portada})` }}
    >
      {loading ? (
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          height="100vh"
        >
          <Box
            paddingLeft={1}
            paddingRight={1}
            paddingBottom={1.5}
            borderRadius={3}
          >
            <Box display="flex" maxWidth={450} gap={2}>
              <Skeleton
                sx={{ bgcolor: "var(--background-skeleton)" }}
                width="42vw"
                height="13vh"
              />
              <Skeleton
                sx={{ bgcolor: "var(--background-skeleton)" }}
                width="42vw"
                height="13vh"
              />
            </Box>
            <Skeleton
              sx={{ bgcolor: "var(--background-skeleton)" }}
              height="5vh"
            />
            <Skeleton
              sx={{ bgcolor: "var(--background-skeleton)" }}
              height="5vh"
            />
            <Skeleton
              sx={{ bgcolor: "var(--background-skeleton)" }}
              height="13vh"
            />

            <Box display="flex" justifyContent="center">
              <Skeleton
                sx={{ bgcolor: "var(--background-skeleton)" }}
                variant="circular"
                width="25px"
                height="25px"
              />
            </Box>
          </Box>
        </Grid>
      ) : (
        <div className="form-modal">
          <div className="form-toggle">
            <button id="login-toggle" onClick={(e) => toggleLogin(e)}>
              log in
            </button>
            <button id="signup-toggle" onClick={(e) => toggleSignup(e)}>
              sign up
            </button>
          </div>

          <div id="login-form">
            <form onSubmit={submitLogin}>
              <input
                type="text"
                onChange={handleUserChange}
                value={user}
                placeholder="Username"
              />
              <input
                type="password"
                onChange={hanblePasswordChange}
                value={password}
                placeholder="Password"
              />
              <button className="btn login">login</button>
              <div className="wrapper" 
              style={{ marginTop: "5px", marginBottom: "15px"}}>
                <input
                  type="checkbox"
                  id="hide-checkbox"
                  onChange={(e) => toggleTheme(e)}
                  checked={theme === "dark"}
                />
                <label htmlFor="hide-checkbox" className="toggle">
                  <span className="toggle-button"></span>
                </label>
              </div>
            </form>
          </div>
          <div id="signup-form">
            <form>
              <input type="email" placeholder="Username" />
              <input type="text" placeholder="Password" />
              <input type="password" placeholder="Confirm password" />
              <button type="button" className="btn signup">
                create account
              </button>
              <div className="wrapper">
                <input
                  type="checkbox"
                  id="hide-checkbox"
                  onChange={() => toggleTheme()}
                  checked={theme === "dark"}
                />
                <label htmlFor="hide-checkbox" className="toggle">
                  <span className="toggle-button"></span>
                </label>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
    /*
    
    */
  );
}

export default Login;
