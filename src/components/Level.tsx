import React from "react";

export default function Level(props: { level: number }) {
  return (
    <div className="flex -mx-2 flex-1">
      {new Array(props.level).fill(1).map((x, i) => (
        <div key={i} className="flex-1 mx-2 bg-gray-550 h-2 rounded-full"></div>
      ))}
      {new Array(5 - props.level).fill(1).map((x, i) => (
        <div key={i} className="flex-1 mx-2 bg-gray-250 h-2 rounded-full"></div>
      ))}
    </div>
  );
}
