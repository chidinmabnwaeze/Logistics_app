import react from "react";
import ReactDOM from "react-dom";

function header() {
  return (
    <div>
        <header>
      <nav className="navbar">
        <ul className="nav-menu">
          <li className="nav-list">
            <a className="nav-link" href="">
              Home
            </a>
          </li>
          <li className="nav-list">
            <a className="nav-link" href="">
            Become a Vendor
            </a>
          </li>
        </ul>
      </nav>
      </header>
    </div>
  );
}

export default header;
