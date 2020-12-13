import React from "react";
import BG from "../images/HeroImagelg.png";
import CatWikiLogo from "../images/CatwikiLogoWhite.svg";
import Image1 from "../images/image 1.png";
import Image2 from "../images/image 2.png";
import Image3 from "../images/image 3.png";
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
        <div className="px-24 py-4 bg-gray-300">
          <p className="underline-short text-xl font-medium">Most Searched Breeds</p>
          <div className="flex items-end justify-between mt-8">
            <h2 className="text-5xl w-1/2 font-bold">66+ Breeds For you to discover</h2>
            <button className="font-bold text-gray-750 text-opacity-60">
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
      <section className="px-24 my-16 -mx-4 flex items-center">
        <div className="w-1/2 px-4 mt-4">
          <h2 className="text-5xl font-bold topline-short">Why should you have a cat?</h2>
          <p className="text-xl font-medium mt-5">
            Having a cat around you can actually trigger the release of calming chemicals in your body which lower your
            stress and anxiety leves
          </p>
          <button className="mt-5 font-bold text-gray-750 text-opacity-60">
            READ MORE <i className="far fa-long-arrow-right"></i>
          </button>
        </div>
        <div className="w-1/2 px-4 mt-4  grid grid-rows-2-auto grid-cols-2-auto gap-8">
          <img className="" src={Image1} alt="" />
          <img className="row-span-2" src={Image3} alt="" />
          <img className="w-3/4 justify-self-end" src={Image2} alt="" />
        </div>
      </section>
    </div>
  );
}
