import React from "react";
import Tiles from "../components/Tiles";

const COLORS = [
  "Aquamarine",
  "CornflowerBlue",
  "DarkMagenta",
  "DarkOrange",
  "Gold",
  "Ivory",
  "Maroon",
  "MidnightBlue",
  "PaleGreen",
  "PapayaWhip",
  "Peru",
  "Teal",
  "Tomato"
];

export default function TileContainer({ size }) {
  const tileSize = window.innerHeight / 2 / size;
  const numofTiles = size * size;

  const tiles = [];

  for (let i = 0; i < numofTiles; i++) {
    if (i > 9999) {
      tiles.push({
        backgroundColor: "Black",
        size: window.innerHeight / 2
      });
      return;
    }
    const randomIndex = Math.floor(Math.random() * COLORS.length);
    const randomColor = COLORS[randomIndex];
    tiles.push({
      backgroundColor: randomColor,
      size: tileSize
    });
  }
  console.log(tiles);
  return <Tiles tiles={tiles} />;
}
