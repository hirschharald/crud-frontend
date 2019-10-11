import React, { useState } from "react";
import NavbarContainer from "./../NavbarContainer";
import { Link} from "./../../util/router.js";
import "./styles.scss";

function Navbar(props) {
  //const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <NavbarContainer
      spaced={props.spaced}
      color={props.color}
      headertext={props.headertext}
    >
      <div className="container">
        <div className="navbar-brand">
          <div className="navbar-item">
            <Link to="/">
              <img className="image" src={props.logo} alt="Logo" />
            </Link>
          </div>
          <div className="navbar-item">{props.headertext}</div>
          <div
            className={"navbar-burger burger" + (menuOpen ? " is-active" : "")}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className={"navbar-menu" + (menuOpen ? " is-active" : "")}>
          <div className="navbar-end">
            <Link className="navbar-item" to="/agenten">
              Agenten
            </Link>
            <Link className="navbar-item" to="/mandanten">
              Mandanten
            </Link>
            <Link className="navbar-item" to="/rufnummern">
              Rufnummern
            </Link>
          </div>
        </div>
      </div>
    </NavbarContainer>
  );
}

export default Navbar;
