import React from "react";
import BG from "../images/HeroImagelg.png";
import CatWikiLogo from "../images/CatwikiLogoWhite.svg";
import Image1 from "../images/image 1.png";
import Image2 from "../images/image 2.png";
import Image3 from "../images/image 3.png";
import CatImage from "../components/CatImage";
import { connect } from "react-redux";
import { TopSearchedCat } from "../store/topSearchSlice";
import { Link } from "react-router-dom";
import AutoComplete from "../components/AutoComplete";

function Home(props: { topSearched: TopSearchedCat[] }) {
  const { topSearched } = props;

  return (
    <div className="container px-4 mt-2 mx-auto">
      <section className="rounded-3xl overflow-hidden">
        <div className="relative">
          <img className="" src={BG} alt="" />
          <div className="absolute top-0 h-full w-full">
            <div className="w-1/2 h-full 2xl:pl-24 xl:pl-20 lg:pl-16 md:pl-14 sm:pl-12 pl-8 flex flex-col justify-center items-start">
              <img className="lg:w-60 md:w-40 sm:w-32 w-24" src={CatWikiLogo} alt="" />
              <p className="md:text-2xl sm:text-xl text-xs text-white sm:mt-4 mt-2">
                Get to know more about your cat breed
              </p>
              <AutoComplete />
            </div>
          </div>
        </div>
        <div className="2xl:px-24 xl:px-20 lg:px-16 md:px-14 sm:px-12 px-8 py-4 bg-gray-300">
          <p className="underline-short sm:text-xl text-xs font-medium">Most Searched Breeds</p>
          <div className="flex items-end justify-between sm:mt-8 mt-4">
            <h2 className="lg:text-5xl sm:text-4xl text-lg md:w-1/2 sm:w-3/4 w-3/4 font-bold">
              66+ Breeds For you to discover
            </h2>
            <Link to="/top" className="font-bold text-gray-750 text-opacity-60 sm:block hidden animate-underline">
              SEE MORE <i className="far fa-long-arrow-right"></i>
            </Link>
          </div>
          <div className="sm:mt-4 mt-2 mb-10   flex -mx-4  justify-between flex-wrap">
            {topSearched.slice(0, 4).map((x: TopSearchedCat) => (
              <CatImage className="px-4" key={x.id} data={x} />
            ))}
          </div>
        </div>
      </section>
      <section className="2xl:px-24 xl:px-20 lg:px-16 md:px-14 my-16 -mx-4 flex items-center md:flex-row flex-col">
        <div className="md:w-1/2 w-full px-4 mt-4">
          <h2 className="lg:text-5xl md:text-4xl sm:text-5xl text-4xl font-bold topline-short">
            Why should you have a cat?
          </h2>
          <p className="lg:text-xl sm:text-xl text-lg font-medium lg:mt-10 mt-10 md:mt-7 ">
            Having a cat around you can actually trigger the release of calming chemicals in your body which lower your
            stress and anxiety leves
          </p>
          <p className="lg:mt-10 mt-10 md:mt-7 mb-10">
            <Link to="/top" className="font-bold text-gray-750 text-opacity-60 animate-underline">
              READ MORE <i className="far fa-long-arrow-right"></i>
            </Link>
          </p>
        </div>
        <div className="md:w-1/2 w-full px-4 mt-4  grid grid-rows-2-auto grid-cols-2-auto xl:gap-8 lg:gap-6 md:gap-5 sm:gap-10 gap-6">
          <img className="transform transition hover:scale-105" src={Image1} alt="" />
          <img className="transform transition hover:scale-105 row-span-2" src={Image3} alt="" />
          <img className="transform transition hover:scale-105 w-3/4 justify-self-end" src={Image2} alt="" />
        </div>
      </section>
    </div>
  );
}

const mapStatetoProps = (state: any) => ({ topSearched: state.topSearched });

const mapDispatchToProps = {};

export default connect(mapStatetoProps, mapDispatchToProps)(Home);
