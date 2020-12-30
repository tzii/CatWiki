import React from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import { TopSearchedCat } from "../store/topSearchSlice";

export default function CatImage(props: { className: string; data?: TopSearchedCat }) {
  const { className, data } = props;
  if (data)
    return (
      <Link
        to={data.id}
        className={className + " mt-4 cursor-pointer relative cat-img 2xl:w-80 xl:w-68 lg:w-56 md:w-40 sm:w-68 w-37"}
      >
        <img
          className="object-cover w-full 2xl:h-72 xl:h-60 lg:h-48 md:h-32 sm:h-60 h-29 rounded-2xl relative z-10"
          src={data.image}
          alt=""
        />
        <p className="text-lg font-semibold sm:mt-4 mt-1 relative z-10">{data.name}</p>
        <div className="absolute z-0 2xl:left-0 2xl:w-8 lg:left-1 lg:w-6 md:left-2 md:w-4 sm:left-1 sm:w-6 left-2 w-4 2xl:top-12 2xl:h-48 xl:h-40 xl:top-10 lg:top-8 lg:h-32 md:top-6 md:h-20 sm:top-10 sm:h-40 top-4 h-16 bg-yellow-550 rounded-2xl opacity-0"></div>
      </Link>
    );
  else
    return (
      <div className={className + " mt-4 2xl:w-80 xl:w-68 lg:w-56 md:w-40 sm:w-68 w-37"}>
        <div className="w-full 2xl:h-72 xl:h-60 lg:h-48 md:h-32 sm:h-60 h-29 mb-1">
          <Skeleton height="100%" />
        </div>
        <Skeleton height={25} />
      </div>
    );
}
