import React from "react";
import CatInfo from "../components/CatInfo";

export default function TopSearch() {
  const data = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

  return (
    <div className="container px-4 mt-2 mx-auto">
      <h2 className="font-bold text-4xl">Top 10 most searched breeds</h2>
      <div className="mb-14">
        {data.map(() => (
          <CatInfo />
        ))}
      </div>
    </div>
  );
}
