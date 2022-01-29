import React, { useEffect, useState, useRef } from "react";
import { render } from "react-dom";
import { Stage, Layer, Line, Text, Image } from "react-konva";
import useImage from "use-image";
import "./main.css";

const URLImage = ({ image }) => {
  const [img] = useImage(image.src);
  return (
    <Image
      image={img}
      x={image.x}
      y={image.y}
      // I will use offset to set origin to the center of the image
      offsetX={img ? img.width / 2 : 0}
      offsetY={img ? img.height / 2 : 0}
    />
  );
};

function Main() {
  const dragUrl = React.useRef();
  const stageRef = React.useRef();
  const [images, setImages] = React.useState([]);
  const [tool, setTool] = React.useState("pen");
  const [lines, setLines] = React.useState([]);
  const isDrawing = React.useRef(false);

  const handleMouseDown = (e) => {
    isDrawing.current = true;
    const pos = e.target.getStage().getPointerPosition();
    setLines([...lines, { tool, points: [pos.x, pos.y] }]);
  };

  const handleMouseMove = (e) => {
    // no drawing - skipping
    if (!isDrawing.current) {
      return;
    }
    const stage = e.target.getStage();
    const point = stage.getPointerPosition();
    let lastLine = lines[lines.length - 1];
    // add point
    lastLine.points = lastLine.points.concat([point.x, point.y]);

    // replace last
    lines.splice(lines.length - 1, 1, lastLine);
    setLines(lines.concat());
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
  };

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
  let cursorClass = tool == "pen" ? `board pencil` : `board eraser`;
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
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
              draggable="true"
              onDragStart={(e) => {
                dragUrl.current = e.target.src;
              }}
              className="p-1"
              style={{ borderRadius: "1rem" }}
              src="https://picsum.photos/id/1027/100/100"
              alt="photos"
            ></img>
            <img
              draggable="true"
              onDragStart={(e) => {
                dragUrl.current = e.target.src;
              }}
              className="p-1"
              style={{ borderRadius: "1rem" }}
              src="https://picsum.photos/id/1029/100/100"
              alt="photos"
            ></img>
            <img
              draggable="true"
              onDragStart={(e) => {
                dragUrl.current = e.target.src;
              }}
              className="p-1"
              style={{ borderRadius: "1rem" }}
              src="https://picsum.photos/id/1038/100/100"
              alt="photos"
            ></img>
            <img
              draggable="true"
              onDragStart={(e) => {
                dragUrl.current = e.target.src;
              }}
              className="p-1"
              style={{ borderRadius: "1rem" }}
              src="https://picsum.photos/id/1031/100/100"
              alt="photos"
            ></img>
            <img
              draggable="true"
              onDragStart={(e) => {
                dragUrl.current = e.target.src;
              }}
              className="p-1"
              style={{ borderRadius: "1rem" }}
              src="https://picsum.photos/id/1032/100/100"
              alt="photos"
            ></img>
            <img
              draggable="true"
              onDragStart={(e) => {
                dragUrl.current = e.target.src;
              }}
              className="p-1"
              style={{ borderRadius: "1rem" }}
              src="https://picsum.photos/id/1033/100/100"
              alt="photos"
            ></img>
          </div>
        </div>
      </div>
      {console.log(tool)}
      <div
        style={{
          borderRadius: "2rem",
          display: "inline",
          width: "60vw",
          height: "65vh",
          border: "honeydew 1px solid",
          boxShadow: "2px 2px 14px -7px #3a424f",
          marginLeft: "7vw",
        }}
        onDrop={(e) => {
          e.preventDefault();
          // register event position
          stageRef.current.setPointersPositions(e);
          // add image
          setImages(
            images.concat([
              {
                ...stageRef.current.getPointerPosition(),
                src: dragUrl.current,
              },
            ])
          );
        }}
        onDragOver={(e) => e.preventDefault()}
      >
        <Stage
          id="canvas"
          className={cursorClass}
          width={760}
          height={375}
          onMouseDown={handleMouseDown}
          onMousemove={handleMouseMove}
          onMouseup={handleMouseUp}
          ref={stageRef}
        >
          <Layer>
            <Text text="Your screen" x={350} y={0} />
            {lines.map((line, i) => (
              <Line
                key={i}
                points={line.points}
                stroke="black"
                strokeWidth={5}
                tension={0.5}
                lineCap="round"
                globalCompositeOperation={
                  line.tool === "eraser" ? "destination-out" : "source-over"
                }
              />
            ))}
            {images.map((image) => {
              return <URLImage image={image} />;
            })}
          </Layer>
          {/* <Layer>
            </Layer> */}
        </Stage>
      </div>
      <select
        className="select"
        value={tool}
        onChange={(e) => {
          setTool(e.target.value);
        }}
      >
        <option value="pen">Pen</option>
        <option value="eraser">Eraser</option>
      </select>
    </div>
  );
}

export default Main;
