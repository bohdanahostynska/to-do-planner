import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import React from "react";
import Loader from "./components/Loader";
import Auth from "./components/Auth";
import Main from "./components/Main";

const links = [
  { id: "1", link: "main" },
  { id: "2", link: "auth" },
  { id: "3", link: "loader" },
];

const RouterApp = () => {
  return (
    <div className="container">
      <nav className="header_nav">
        {links.map(({ id, link, name }) => (
          <li
            key={id}
            className="nav_item"
            style={{ listStyle: "none", textDecoration: "none" }}
          >
            <NavLink
              className="nav_link"
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "grey" : "transparent",
                };
              }}
              to={link}
            >
              {name}
            </NavLink>
          </li>
        ))}
      </nav>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/loader" element={<Loader />} />
        {/* <Route path="*" element={<Navigate to="/main" />} /> */}
      </Routes>
    </div>
  );
};

export default RouterApp;
