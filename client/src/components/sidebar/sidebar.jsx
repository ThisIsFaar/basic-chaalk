import "./sidebar.css";
function Sidebar() {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 sidebar-bg"
      style={{ width: "4.5rem" }}
    >
      <ul
        className="nav nav-pills nav-flush flex-column mb-auto text-center"
        style={{ marginTop: "15vh" }}
      >
        <li className="nav-item">
          <a
            href="#"
            className="nav-link py-3 text-white "
            aria-current="page"
            title="upload"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
          >
            <i class="far fa-lg fa-clone"></i>
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#"
            className="nav-link py-3 text-white "
            aria-current="page"
            title="image"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
          >
            <i class="far fa-lg fa-file-image"></i>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="nav-link py-3 text-white "
            title="pdf"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
          >
            <i class="far fa-lg fa-file-pdf"></i>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="nav-link py-3 text-white "
            title="cloud"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
          >
            <i class="fas fa-lg fa-cloud-upload-alt"></i>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="nav-link py-3 text-white "
            title="video"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
          >
            <i class="fab fa-lg fa-youtube"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
