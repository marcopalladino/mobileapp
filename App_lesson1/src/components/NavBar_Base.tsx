import { useState } from "react";

function NavBar_Base(props) {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="24"
            fill="currentColor"
            className="bi bi-tank d-inline-block align-text-top me-2"
            viewBox="0 0 16 16"
          >
            <path d="M7.314 1.316A1.5 1.5 0 0 1 8.5 1h3.487a1.5 1.5 0 0 1 .823.242l2 1.313a1.5 1.5 0 0 1 .55.596l2.047 4.093a1.5 1.5 0 0 1 0 1.342v.5a1.5 1.5 0 0 1-1 1.414V12a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 2.4 12v-1.5a1.5 1.5 0 0 1-1-1.414v-.5a1.5 1.5 0 0 1 0-1.342L3.447 3.15a1.5 1.5 0 0 1 .55-.596l2-1.313A1.5 1.5 0 0 1 6.5 1h3.487a1.5 1.5 0 0 1 .823.242zM14 7.5a2.5 2.5 0 0 0-5 0 2.5 2.5 0 0 0 5 0m-9 0a2.5 2.5 0 0 0-5 0 2.5 2.5 0 0 0 5 0"/>
          </svg>
          {props.Titolo}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsNavCollapsed(!isNavCollapsed)}
          aria-controls="navbarNav"
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pricing</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar_Base;