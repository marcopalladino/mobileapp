import { useState } from "react";

function AlertComponent({ message }) {
  return <div className="alert alert-info">{message}</div>;
}

function NavBar_Footer(props) {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <>
   
      {showAlert && <AlertComponent message={props.Message} />}
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="vite.svg"
              alt="Logo"
              width="30"
              height="24"
              className="d-inline-block align-text-top"
              onClick={() => setShowAlert(true)}
              style={{ cursor: "pointer" }}
            />
            {props.Titolo}
          </a>
        </div>
      </nav>
    </>
  );
}

export default NavBar_Footer;