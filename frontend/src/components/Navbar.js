import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../src/Navbar.css";
import Logo from "../image/BetaMart-logo.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container d-flex justify-content-between">
        <div>
          <Link className="navbar-brand me-4" to="/">
            <img src={Logo} alt="Logo" width="100" height="70" />
          </Link>
        </div>
        <div>
          <Link className="nav-link nav-hover" to="/">
            Home
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
