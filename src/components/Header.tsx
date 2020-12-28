import React from "react";
import { Link } from "react-router-dom";
import CatWikiLogo from "../images/CatwikiLogo.svg";

export default function Header() {
  return (
    <div className="container px-4 mx-auto mt-2">
      <Link to="">
        <img className="w-48" src={CatWikiLogo} alt="" />
      </Link>
    </div>
  );
}
