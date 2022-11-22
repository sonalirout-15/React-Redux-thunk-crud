import React from "react";
import {  userDetail } from "./Data";
import UserDropdown from "./UserDropdown";

const Header = () => {

  return (
    <div>
      <div className="navbar-bg" />
      <nav className="navbar navbar-expand-lg main-navbar">
      <form className="form-inline mr-auto">
          <ul className="navbar-nav mr-3">
            <li>
              <a
                href="#"
                data-toggle="sidebar"
                className="nav-link nav-link-lg"
              >
                <i className="fas fa-bars" />
              </a>
            </li>

          </ul>
        </form> 

        <ul className="navbar-nav navbar-right">

          <UserDropdown userDetail={userDetail}/>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
