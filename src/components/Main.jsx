import { React, memo } from "react";
import { fabric } from "fabric";
import { useState } from "react";
import { useEffect } from "react";
import "./Main.css";
const Main = memo(() => {
  const [canvas, setcanvas] = useState("");
  const [draw, setdraw] = useState(false);
  const initCanvase = () => {
    var canvito = new fabric.Canvas("canvas", {
      isDrawingMode: false,
      height: 400,
      width: 800,
      backgroundColor: "pink",
    });
    return canvito;
  };

  const addRect = (canvi) => {
    const rect = new fabric.Rect({
      fill: "yellow",
      stroke: "green",
      height: 150,
      width: 250,
    });

    canvi.add(rect);
    canvi.renderAll();
  };
  const addCir = (canvi) => {
    const rect = new fabric.Circle({
      fill: "yellow",
      stroke: "green",
      radius: 50,
    });

    canvi.add(rect);
    canvi.renderAll();
  };
  const addtri = (canvi) => {
    const rect = new fabric.Triangle({
      fill: "greenyellow",
      stroke: "black",
      width: 100,
      height: 100,
      angle: 0,
    });

    canvi.add(rect);
    canvi.renderAll();
  };

  function drawing(canvas) {
    canvas.isDrawingMode = !canvas.isDrawingMode;
    setdraw(!draw);
  }

  function Clear(canvas) {
    canvas.clear();
    canvas.backgroundColor = "pink";
  }

  useEffect(() => {
    document.body.style.backgroundColor = "black";
    setcanvas(initCanvase());
  }, []);

  return (
    <div className="mainbox">
      <div className="btn_box">
        <button onClick={() => addRect(canvas)}>Rectangle</button>
        <button onClick={() => addCir(canvas)}>Circle</button>
        <button onClick={() => addtri(canvas)}>Triangle</button>
        <button onClick={() => Clear(canvas)}>Clear</button>
        <button id="drawingMode" onClick={() => drawing(canvas)}>
          {draw ? "Draw Mode on" : "Draw Mode off"}
        </button>
      </div>
      <canvas id="canvas" />
    </div>
  );
});

export default Main;
