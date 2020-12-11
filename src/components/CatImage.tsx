import React from "react";

const imageurl = "https://undark.org/wp-content/uploads/2020/02/GettyImages-1199242002-1-scaled.jpg";

export default function CatImage(props: { className: string }) {
  const { className } = props;
  return (
    <div className={className + " cursor-pointer relative cat-img"}>
      <img className="object-cover 2xl:w-72 2xl:h-72 rounded-2xl relative z-10" src={imageurl} alt="" />
      <p className="text-lg font-semibold mt-4 relative z-10">Bengal</p>
      <div className="absolute z-0 left-0 top-12 w-8 2xl:h-48 bg-yellow-550 rounded-2xl opacity-0"></div>
    </div>
  );
}
