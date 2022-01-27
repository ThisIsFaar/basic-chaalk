import "./footer.css";

function Footer() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-nav-clr">
      <div className="container-fluid d-flex justify-content-center">
        <ul className="navbar-nav d-flex align-items-center">
          <li className="nav-item rounded-circle icons-btm mx-2">
            <a className="nav-link text-white" href="">
              <i className="fas fa-microphone"></i>
            </a>
          </li>
          <li className="nav-item rounded-circle icons-btm mx-2 rounded-circle">
            <a className="nav-link text-white" href="">
              <i className="fas fa-video"></i>
            </a>
          </li>
          <li className="nav-item rounded-circle icons-btm mx-2">
            <a className="nav-link text-white" href="">
              <i className="far fa-closed-captioning"></i>
            </a>
          </li>
          <li className="nav-item rounded-circle icons-btm mx-2">
            <a className="nav-link text-white" href="">
              <i className="fas fa-external-link-alt"></i>
            </a>
          </li>
          <li className="nav-item rounded-circle icons-btm mx-2">
            <a className="nav-link text-white" href="">
              <i className="fas fa-ellipsis-v"></i>
            </a>
          </li>
          <li className="nav-item rounded-circle icons-btm bg-danger mx-2">
            <a className="nav-link text-white" href="">
              <i className="fas fa-phone-slash"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Footer;
