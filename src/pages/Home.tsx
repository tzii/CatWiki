import React from "react";
import BG from "../images/HeroImagelg.png";
import CatWikiLogo from "../images/CatwikiLogoWhite.svg";
import CatImage from "../components/CatImage";

export default function Home() {
  return (
    <div className="container px-4 mt-2 mx-auto">
      <section className="rounded-3xl overflow-hidden">
        <div className="relative">
          <img className="" src={BG} alt="" />
          <div className="absolute top-0 h-full w-full">
            <div className="w-5/12 h-full pl-12 flex flex-col justify-center items-start">
              <img className="w-60" src={CatWikiLogo} alt="" />
              <p className="text-xl text-white">Get to know more about your cat breed</p>
              <form className="mt-5 relative">
                <label htmlFor="search">
                  <input
                    className="w-72 h-10 rounded-full pl-4 pr-7"
                    type="text"
                    id="search"
                    placeholder="Enter your breed"
                  />
                </label>
                <i className="fas fa-search absolute  pos-center right-2"></i>
              </form>
            </div>
          </div>
        </div>
        <div className="px-12 py-4 bg-gray-300">
          <p className="underline-short text-xl">Most Searched Breeds</p>
          <div className="flex items-end justify-between mt-8">
            <h2 className="text-5xl w-1/2 font-bold">66+ Breeds For you to discover</h2>
            <button>
              SEE MORE <i className="far fa-long-arrow-right"></i>
            </button>
          </div>
          <div className="mt-10 flex -mx-4  justify-between flex-wrap">
            {[{}, {}, {}, {}].map((res) => (
              <CatImage className="px-4" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
