import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import HomeIcon from "@mui/icons-material/Home";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import MovieIcon from "@mui/icons-material/Movie";
import QueueIcon from '@mui/icons-material/Queue';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import FavTheme from "../settings/contexts/FavTheme";
import "./sidebar.css";

const principalItems = [
  {
    path: "/home",
    name: "home",
    icon: <HomeIcon />,
  },
  {
    path: "/logout",
    name: "logout",
    icon: <AccountCircleIcon />,
  },
  {
    path: "/movies",
    name: "movies",
    icon: <MovieIcon />,
  },
  {
    path: "/tv",
    name: "tv shows",
    icon: <LiveTvIcon />,
  },
  {
    path: "/newCollection",
    name: "new collection",
    icon: <QueueIcon />,
  },
];

const menuItem = [
  {
    path: "/terror",
    name: "collection #1",
    icon: <SubscriptionsIcon />,
  },
  {
    path: "/terror",
    name: "collection #2",
    icon: <SubscriptionsIcon />,
  },
  {
    path: "/terror",
    name: "collection #3",
    icon: <SubscriptionsIcon />,
  },
  {
    path: "/terror",
    name: "collection #4",
    icon: <SubscriptionsIcon />,
  },
  {
    path: "/terror",
    name: "collection #5",
    icon: <SubscriptionsIcon />,
  },
];

export default function SideBar({ children }) {
  const [theme, handleChange] = FavTheme();
  const [open, setOpen] = useState(false);

  function toggleMenu() {
    open ? setOpen(false) : setOpen(true);
  }
  function toggleTheme(e) {
    if (e.target.checked) {
      handleChange("dark");
    } else {
      handleChange("light");
    }
  }

  return (
    <>
      <div data-theme={theme}>
        <div className="container">
          <div style={{ width: open ? "220px" : "60px" }} className="sidebar">
            <div className="top_section">
              <div
                onClick={toggleMenu}
                className={`menu ${open ? "open" : ""}`}
              >
                {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
              </div>
              <div className="wrapper">
                <input
                  type="checkbox"
                  id="hide-checkbox"
                  onChange={toggleTheme}
                  checked={theme === "dark"}
                />
                <label htmlFor="hide-checkbox" className="toggle">
                  <span className="toggle-button"></span>
                </label>
              </div>
              {principalItems.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className="link"
                >
                  <div className="icon">{item.icon}</div>
                  <div
                    style={{ display: open ? "block" : "none" }}
                    className="link_text"
                  >
                    {item.name}
                  </div>
                </NavLink>
              ))}
              <div className="link">
              <hr />
              </div>
              {menuItem.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className="link"
                >
                  <div className="icon">{item.icon}</div>
                  <div
                    style={{ display: open ? "block" : "none" }}
                    className="link_text"
                  >
                    {item.name}
                  </div>
                </NavLink>
              ))}
            </div>
          </div>
          <main>{children}</main>
        </div>
      </div>
    </>
  );
}
