import React from "react";
import TilesContainer from "../containers/TilesContainer";

export default function Board(props) {
  const { name, size, onChange } = props;
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <input
        type="number"
        placeholder="Size of Board"
        value={size}
        onChange={onChange}
      />
      <div id="board">
        <TilesContainer size={size} />
      </div>
      <p>
        The size of this board is {size}x{size}.
      </p>
    </div>
  );
}
