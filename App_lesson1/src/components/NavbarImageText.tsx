import React from "react";

const NavbarImageText: React.FC = () => {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="vite.svg"
            alt="Logo"
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          />
          Bootstrap
        </a>
      </div>
    </nav>
  );
};

export default NavbarImageText;
