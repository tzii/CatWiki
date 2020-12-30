import React from "react";
import Skeleton from "react-loading-skeleton";
import { Link, useHistory } from "react-router-dom";
import { TopSearchedCat } from "../store/topSearchSlice";

export default function CatInfo(props: { data?: TopSearchedCat; index?: number }) {
  const history = useHistory();
  if (props.data) {
    return (
      <div className="mt-12 flex">
        <img
          className="object-cover 2xl:w-48 2xl:h-48 xl:w-44 xl:h-44 lg:w-40 lg:h-40 md:w-36 md:h-36 sm:w-32 sm:h-32 w-24 h-24 rounded-2xl sm:mr-5 mr-3 cursor-pointer"
          src={props.data.image}
          alt=""
          onClick={() => history.push(props.data!.id)}
        />
        <div>
          <Link to={props.data.id} className="lg:text-4xl md:text-3xl text-2xl font-semibold">
            {props.index}. {props.data.name}
          </Link>
          <p className="md:text-lg text-base font-medium mt-4">{props.data.description}</p>
        </div>
      </div>
    );
  } else
    return (
      <div className="mt-12 flex items-center">
        <div className="2xl:w-48 2xl:h-48 xl:w-44 xl:h-44 lg:w-40 lg:h-40 md:w-36 md:h-36 sm:w-32 sm:h-32 w-24 h-24 rounded-2xl sm:mr-5 mr-3">
          <Skeleton height="100%" />
        </div>
        <div className="flex-1">
          <Skeleton count={4} />
        </div>
      </div>
    );
}
