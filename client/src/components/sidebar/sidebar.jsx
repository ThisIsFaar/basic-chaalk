import "./sidebar.css";
function Sidebar() {
  function openSideContent(e) {
    e.preventDefault();
    document.getElementById("sideDiv").style.visibility = "visible";
    document.getElementById("sideDiv").style.width = "20vw";
    console.log("The link was clicked.");
  }
  function closeSideContent(e) {
    e.preventDefault();
    document.getElementById("sideDiv").style.visibility = "hidden";
    document.getElementById("sideDiv").style.width = "0vw";
    console.log("The link was clicked.");
  }
  return (
    <div
      className="d-flex flex-shrink-0 "
      style={{ width: "25vw", height: "80vh" }}
    >
      <ul
        className="nav nav-pills nav-flush flex-column mb-auto text-center sidebar-bg"
        style={{ paddingTop: "15vh", width: "5vw", height: "80vh" }}
      >
        <li className="nav-item">
          <a
            className="nav-link py-3 text-white "
            href=""
            aria-current="page"
            title="upload"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            onClick={openSideContent}
          >
            <i className="far fa-lg fa-clone"></i>
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
            <i className="far fa-lg fa-file-image"></i>
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
            <i className="far fa-lg fa-file-pdf"></i>
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
            <i className="fas fa-lg fa-cloud-upload-alt"></i>
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
            <i className="fab fa-lg fa-youtube"></i>
          </a>
        </li>
      </ul>
      <div
        id="sideDiv"
        className="bg-dark rounded-end"
        style={{ width: "0vw" }}
      >
        <i
          className="far fa-2x fa-times-circle text-white"
          style={{ cursor: "pointer" }}
          onClick={closeSideContent}
          title="close"
          data-bs-toggle="tooltip"
          data-bs-placement="bottom"
        ></i>
        <div
          className="my-5"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
          }}
        >
          <img
            className="p-1"
            style={{ borderRadius: "1rem" }}
            src="https://picsum.photos/id/1027/100/100"
            alt="photos"
          ></img>
          <img
            className="p-1"
            style={{ borderRadius: "1rem" }}
            src="https://picsum.photos/id/1029/100/100"
            alt="photos"
          ></img>
          <img
            className="p-1"
            style={{ borderRadius: "1rem" }}
            src="https://picsum.photos/id/1038/100/100"
            alt="photos"
          ></img>
          <img
            className="p-1"
            style={{ borderRadius: "1rem" }}
            src="https://picsum.photos/id/1031/100/100"
            alt="photos"
          ></img>
          <img
            className="p-1"
            style={{ borderRadius: "1rem" }}
            src="https://picsum.photos/id/1032/100/100"
            alt="photos"
          ></img>
          <img
            className="p-1"
            style={{ borderRadius: "1rem" }}
            src="https://picsum.photos/id/1033/100/100"
            alt="photos"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
