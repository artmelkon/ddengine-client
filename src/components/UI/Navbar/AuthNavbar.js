import React from 'react'
import { NavLink } from "react-router-dom";

const AuthNavbar = ({ classMenu }) => {
  return (
    <>
      <NavLink to="/dashboard" className={classMenu}>
        DASHBOARD
      </NavLink>
      <NavLink to="/filemanager" className={classMenu}>
        FILEMANAGER
      </NavLink>
      <NavLink to="/hubchooser" className={classMenu}>
        HUBCHOOSER
      </NavLink>
      <NavLink to="/upload" className={classMenu}>
        UPLOAD
      </NavLink>
      <NavLink to="/profile" className={classMenu}>
        PROFILE
      </NavLink>
    </>
  );
};

export default AuthNavbar
