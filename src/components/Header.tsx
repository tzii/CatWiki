import React from "react";
import CatWikiLogo from "../images/CatwikiLogo.svg";

export default function Header() {
  return (
    <div className="container px-4 mx-auto mt-2">
      <img src={CatWikiLogo} alt="" />
    </div>
  );
}
