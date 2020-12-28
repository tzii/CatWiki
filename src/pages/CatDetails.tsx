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
      <div className="container px-4 mt-4 mx-auto">
        <section className="px-24 flex">
          <div className="relative w-72 h-72 mr-10">
            <div className="absolute -left-4 top-12 w-8 h-48 bg-yellow-550 rounded-2xl"></div>
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
            <div className="grid grid-cols-2-info mt-3 w-4/6 items-center">
              <span className="my-3 font-bold w-52">Adaptability:</span>
              <Level level={Number(data.adaptability)} />
              <span className="my-3 font-bold w-52">Affection level:</span>
              <Level level={Number(data.affection_level)} />
              <span className="my-3 font-bold w-52">Child Friendly:</span>
              <Level level={Number(data.child_friendly)} />
              <span className="my-3 font-bold w-52">Grooming:</span>
              <Level level={Number(data.grooming)} />
              <span className="my-3 font-bold w-52">Intelligence:</span>
              <Level level={Number(data.intelligence)} />
              <span className="my-3 font-bold w-52">Health issues:</span>
              <Level level={Number(data.health_issues)} />
              <span className="my-3 font-bold w-52">Social needs:</span>
              <Level level={Number(data.social_needs)} />
              <span className="my-3 font-bold w-52">Stranger friendly:</span>
              <Level level={Number(data.stranger_friendly)} />
            </div>
          </div>
        </section>
        <section className="my-20">
          <h2 className="text-4xl font-semibold">Other photos</h2>
          <div className="flex -mx-4 flex-wrap justify-between">
            {data.images.slice(1).map((x: string) => (
              <div className="px-4 mt-10">
                <img className="w-80 h-80 object-cover rounded-3xl" src={x} alt="" />
              </div>
            ))}
          </div>
        </section>
      </div>
    );
}
