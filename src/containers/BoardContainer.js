import React, { useState } from "react";
import Board from "../components/Board";

export default function BoardContainer() {
  const [size, setSize] = useState(1);
  const handleChange = ({ target }) => setSize(target.value);
  return <Board name="Jose" size={size} onChange={handleChange} />;
}
