import React, { useState } from "react";
import { buyPixel } from "../api/celoApi";

export default function CanvasGrid({ wallet }) {
  const [grid, setGrid] = useState(Array(10).fill(null).map(() => Array(10).fill("#ffffff")));

  const handlePixelClick = async (x, y) => {
    const color = prompt("Enter a hex color (e.g., #ff0000):");
    if (!color) return;
    const res = await buyPixel(wallet, x, y, color);
    if (res.success) {
      const newGrid = [...grid];
      newGrid[y][x] = color;
      setGrid(newGrid);
    }
  };

  return (
    <div style={{ display: "inline-block", marginTop: "20px" }}>
      {grid.map((row, y) => (
        <div key={y} style={{ display: "flex" }}>
          {row.map((cell, x) => (
            <div
              key={x}
              onClick={() => handlePixelClick(x, y)}
              style={{
                width: "30px",
                height: "30px",
                backgroundColor: cell,
                border: "1px solid #ccc",
                cursor: wallet ? "pointer" : "not-allowed",
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
