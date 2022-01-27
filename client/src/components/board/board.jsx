import "./board.css";
import $ from "jquery";
import React, { Component, useEffect, useState } from "react";

function Board() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    var myCanvas = document.getElementById("canvas");
    var curColor = "red";
    if (myCanvas) {
      var isDown = false;
      var ctx = myCanvas.getContext("2d");
      var canvasX, canvasY;
      ctx.lineWidth = 5;

      $(myCanvas)
        .mousedown(function (e) {
          isDown = true;
          ctx.beginPath();
          canvasX = e.pageX - myCanvas.offsetLeft;
          canvasY = e.pageY - myCanvas.offsetTop;
          ctx.moveTo(canvasX, canvasY);
        })
        .mousemove(function (e) {
          if (isDown != false) {
            canvasX = e.pageX - myCanvas.offsetLeft;
            canvasY = e.pageY - myCanvas.offsetTop;
            ctx.lineTo(canvasX, canvasY);
            ctx.strokeStyle = curColor;
            ctx.stroke();
          }
        })
        .mouseup(function (e) {
          isDown = false;
          ctx.closePath();
        });
    }
  });

  return (
    <div>
      <p>Your Screen</p>
      <canvas id="canvas" className="board">
        Board
      </canvas>
      <button onClick={() => setCount(count + 1)}>tik</button>
    </div>
  );
}

export default Board;
