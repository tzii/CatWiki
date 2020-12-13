import React from "react";
import CatWikiLogo from "../images/CatwikiLogoWhite.svg";

export default function Footer() {
  return (
    <footer className=" container px-4 mx-auto">
      <div className="flex justify-between items-center bg-black px-24 py-6 rounded-t-3xl">
        <img src={CatWikiLogo} alt="" />
        <p className="text-white">
          © <a href="">Tuấn Vũ</a> - <a href="">DevChallenge.io</a> 2020
        </p>
      </div>
    </footer>
  );
}
