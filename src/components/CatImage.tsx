import React from "react";

const imageurl = "https://undark.org/wp-content/uploads/2020/02/GettyImages-1199242002-1-scaled.jpg";

export default function CatImage(props: { className: string }) {
  const { className } = props;
  return (
    <div className={className + " mt-4 cursor-pointer relative cat-img w-auto"}>
      <img
        className="object-cover 2xl:w-72 2xl:h-72 xl:w-60 xl:h-60 lg:w-48 lg:h-48 md:w-32 md:h-32 sm:w-60 sm:h-60 w-24 h-24 rounded-2xl relative z-10"
        src={imageurl}
        alt=""
      />
      <p className="text-lg font-semibold sm:mt-4 mt-1 relative z-10">Bengal</p>
      <div className="absolute z-0 left-0 w-8 2xl:top-12 2xl:h-48 xl:h-40 xl:top-10 lg:top-8 lg:h-32 md:top-6 md:h-20 sm:top-10 sm:h-40 top-4 h-16 bg-yellow-550 rounded-2xl opacity-0"></div>
    </div>
  );
}
