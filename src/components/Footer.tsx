import React from "react";
import CatWikiLogo from "../images/CatwikiLogoWhite.svg";

export default function Footer() {
  return (
    <footer className=" container px-4 mx-auto">
      <div className="flex md:justify-between justify-center items-center bg-black 2xl:px-24 xl:px-20 lg:px-16 md:px-14 xl:py-6 lg:py-5 py-3 rounded-t-3xl">
        <img className="md:block hidden" src={CatWikiLogo} alt="" />
        <p className="text-white">
          © <a href="https://github.com/Shoji5">Tuấn Vũ</a> - <a href="https://devchallenges.io/">DevChallenge.io</a>{" "}
          2020
        </p>
      </div>
    </footer>
  );
}
