import "./board.css";
import React, { useEffect, useState, useRef } from "react";

function Board() {
  const [isDrawing, setIsDrawing] = useState(false);
  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  const prepareCanvas = () => {
    const canvas = canvasRef.current;
    canvas.width = 760 * 2;
    canvas.height = 482 * 2;
    canvas.style.width = `760px`;
    canvas.style.height = `482px`;

    const context = canvas.getContext("2d");
    context.scale(2, 2);
    context.lineCap = "round";
    context.strokeStyle = "black";
    context.lineWidth = 5;
    contextRef.current = context;
  };

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const finishDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) {
      return;
    }
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);
  };

  useEffect(() => {
    prepareCanvas();
  }, []);

  return (
    <div>
      <p style={{ margin: 0 }}>Your Screen</p>
      <canvas
        onMouseDown={startDrawing}
        onMouseUp={finishDrawing}
        onMouseMove={draw}
        ref={canvasRef}
        id="canvas"
        className="board"
      />
      <button
        style={{
          borderRadius: "1rem",
          fontSize: "12px",
          padding: "0.4rem",
          top: "10",
          position: "absolute",
          top: "80vh",
          left: "60vw",
        }}
        onClick={clearCanvas}
      >
        Erase All
      </button>
    </div>
  );
}

export default Board;
