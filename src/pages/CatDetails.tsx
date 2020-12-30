import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBreed } from "../api";
import Level from "../components/Level";

export default function CatDetails() {
  const [data, setData] = useState<any>({ status: "err", msg: "wrong breed id" });
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    getBreed(id).then(setData);
  }, [id]);
  if (data.status) return null;
  else
    return (
      <div className="container px-4 mt-4 mx-auto text-lg">
        <section className="2xl:px-24 xl:px-20 lg:px-16 md:px-12 sm:px-8 flex flex-wrap">
          <div className="relative 2xl:w-72 2xl:h-72 xl:w-68 xl:h-68 lg:w-60 lg:h-60 md:w-full md:h-full lg:mr-10 mb-10">
            <div className="absolute xl:-left-4 xl:w-8 2xl:h-48 xl:h-48 lg:h-40 sm:-left-3 sm:w-6 -left-2 w-4 h-3/4 bg-yellow-550 pos-center rounded-2xl"></div>
            <img className="w-full h-full object-cover rounded-2xl relative z-10" src={data.images[0]} alt="" />
          </div>
          <div className="flex-1">
            <h2 className="text-4xl font-semibold">{data.name}</h2>
            <p className="font-medium mt-6">{data.description}</p>
            <p className="text-black mt-6">
              <span className="font-bold">Temperament: </span>
              <span className="font-medium">{data.temperament}</span>
            </p>
            <p className="text-black mt-6">
              <span className="font-bold">Origin: </span>
              <span className="font-medium">{data.origin}</span>
            </p>
            <p className="text-black mt-6">
              <span className="font-bold">Life Span: </span>
              <span className="font-medium">{data.life_span} years</span>
            </p>
            <div className="grid sm:grid-cols-2-info mt-3 2xl:w-2/3 xl:w-9/12 md:w-11/12 items-center">
              <span className="sm:my-3 mt-3 mb-1 font-bold">Adaptability:</span>
              <Level level={Number(data.adaptability)} />
              <span className="sm:my-3 mt-5 mb-1 font-bold">Affection level:</span>
              <Level level={Number(data.affection_level)} />
              <span className="sm:my-3 mt-5 mb-1 font-bold">Child Friendly:</span>
              <Level level={Number(data.child_friendly)} />
              <span className="sm:my-3 mt-5 mb-1 font-bold">Grooming:</span>
              <Level level={Number(data.grooming)} />
              <span className="sm:my-3 mt-5 mb-1 font-bold">Intelligence:</span>
              <Level level={Number(data.intelligence)} />
              <span className="sm:my-3 mt-5 mb-1 font-bold">Health issues:</span>
              <Level level={Number(data.health_issues)} />
              <span className="sm:my-3 mt-5 mb-1 font-bold">Social needs:</span>
              <Level level={Number(data.social_needs)} />
              <span className="sm:my-3 mt-5 mb-1 font-bold">Stranger friendly:</span>
              <Level level={Number(data.stranger_friendly)} />
            </div>
          </div>
        </section>
        <section className="my-20">
          <h2 className="text-4xl font-semibold">Other photos</h2>
          <div className="flex -mx-4 flex-wrap justify-between">
            {data.images.slice(1).map((x: string) => (
              <div className="px-4 mt-10">
                <img
                  className="2xl:w-80 2xl:h-80 xl:w-72 xl:h-72 lg:w-56 lg:h-56 md:w-88 md:h-88 sm:w-72 sm:h-72 w-full object-cover rounded-3xl"
                  src={x}
                  alt=""
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    );
}
