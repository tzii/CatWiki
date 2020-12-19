import React from "react";

export default function CatInfo() {
  return (
    <div className="mt-12 flex">
      <img
        className="object-cover 2xl:w-48 2xl:h-48 xl:w-44 xl:h-44 lg:w-40 lg:h-40 md:w-36 md:h-36 sm:w-32 sm:h-32 w-28 h-28 rounded-2xl mr-5"
        src="https://undark.org/wp-content/uploads/2020/02/GettyImages-1199242002-1-scaled.jpg"
        alt=""
      />
      <div>
        <h3 className="lg:text-4xl md:text-3xl text-2xl font-semibold">1. Bengal</h3>
        <p className="md:text-lg text-base font-medium mt-4">
          Bengals are a lot of fun to live with, but they're definitely not the cat for everyone, or for first-time cat
          owners. Extremely intelligent, curious and active, they demand a lot of interaction and woe betide the owner
          who doesn't provide it.
        </p>
      </div>
    </div>
  );
}
