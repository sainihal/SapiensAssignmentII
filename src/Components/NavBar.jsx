import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar(props) {
  return (
    <div style={{ padding: "15px", textDecoration: "none" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          fontSize: 28,
          backgroundColor: "lightblue",
        }}
      >
        <div style={{}}>
          <NavLink
            exact
            to="/"
            activeStyle={{
              color: "blue",
              fontWeight: "80",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Sapiens Assignment
          </NavLink>
        </div>
        <NavLink
          to="/form"
          activeStyle={{
            color: "blue",
            fontWeight: "bold",
            textDecoration: "none",
          }}
        >
          Form
        </NavLink>
        <NavLink
          to="/list"
          activeStyle={{
            color: "blue",
            fontWeight: "bold",
            textDecoration: "none",
          }}
        >
          List
        </NavLink>
      </div>
    </div>
  );
}
