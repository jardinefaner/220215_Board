import React from "react";

export default function Tiles({ tiles }) {
  return tiles.map((tile) => {
    return (
      <div
        style={{
          backgroundColor: tile.backgroundColor,
          width: tile.size,
          height: tile.size
        }}
      ></div>
    );
  });
}
