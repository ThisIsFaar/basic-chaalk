import "./navbar.css";
const logo = require("./logo-2.png");
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-nav-clr">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="brand image"></img>
        </a>
        <div
          className="collapse navbar-collapse d-flex justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav d-flex align-items-center">
            <li className="nav-item">
              <a className="nav-link" href="#">
                home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                help
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Mckinze
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <img
                  className="rounded-circle"
                  src="https://picsum.photos/id/1027/40/40"
                  alt="brand image"
                ></img>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
