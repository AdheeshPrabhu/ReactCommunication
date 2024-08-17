// Nav.js
import React from "react";
import CustomNavbar from "../Components/CustomNavbar";
import { navbarConfigs } from "../Config/navbarConfig";
import { Outlet } from "react-router-dom";

function Nav() {
  return (
    <div>
      {navbarConfigs.map((config, index) => (
        <React.Fragment key={index}>
          <CustomNavbar
            bg={config.bg}
            theme={config.theme}
            brand={config.brand}
            links={config.links}
          />
          <br />
        </React.Fragment>
      ))}
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Nav;
