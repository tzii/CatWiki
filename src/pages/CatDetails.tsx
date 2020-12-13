import React from "react";
import Level from "../components/Level";

export default function CatDetails() {
  return (
    <div className="container px-4 mt-4 mx-auto">
      <section className="px-24 flex">
        <div className="relative w-72 h-72 mr-10">
          <div className="absolute -left-4 top-12 w-8 h-48 bg-yellow-550 rounded-2xl"></div>
          <img
            className="w-full h-full object-cover rounded-2xl relative z-10"
            src="https://undark.org/wp-content/uploads/2020/02/GettyImages-1199242002-1-scaled.jpg"
            alt=""
          />
        </div>
        <div className="flex-1">
          <h2 className="text-4xl font-semibold">Bengal</h2>
          <p className="font-medium mt-6">
            Bengals are a lot of fun to live with, but they're definitely not the cat for everyone, or for first-time
            cat owners. Extremely intelligent, curious and active, they demand a lot of interaction and woe betide the
            owner who doesn't provide it.
          </p>
          <p className="text-black mt-6">
            <span className="font-bold">Temperament: </span>
            <span className="font-medium">Alert, Agile, Energetic, Demanding, Intelligent</span>
          </p>
          <p className="text-black mt-6">
            <span className="font-bold">Origin: </span>
            <span className="font-medium">United States</span>
          </p>
          <p className="text-black mt-6">
            <span className="font-bold">Life Span: </span>
            <span className="font-medium">12 - 15 years</span>
          </p>
          <div className="grid grid-cols-2-info mt-3 w-4/6 items-center">
            <span className="my-3 font-bold w-52">Adaptability:</span>
            <Level />
            <span className="my-3 font-bold w-52">Affection level:</span>
            <Level />
            <span className="my-3 font-bold w-52">Child Friendly:</span>
            <Level />
            <span className="my-3 font-bold w-52">Grooming:</span>
            <Level />
            <span className="my-3 font-bold w-52">Intelligence:</span>
            <Level />
            <span className="my-3 font-bold w-52">Health issues:</span>
            <Level />
            <span className="my-3 font-bold w-52">Social needs:</span>
            <Level />
            <span className="my-3 font-bold w-52">Stranger friendly:</span>
            <Level />
          </div>
        </div>
      </section>
      <section className="my-20">
        <h2 className="text-4xl font-semibold">Other photos</h2>
        <div className="flex -mx-4 flex-wrap justify-between">
          {[{}, {}, {}, {}, {}, {}, {}, {}].map(() => (
            <div className="px-4 mt-10">
              <img
                className="w-80 h-80 object-cover rounded-3xl"
                src="https://undark.org/wp-content/uploads/2020/02/GettyImages-1199242002-1-scaled.jpg"
                alt=""
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
