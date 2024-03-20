import React from "react";
import { FaCirclePlus } from "react-icons/fa6";

const ProductCard = ({ name, image, price, addToCart }) => {
  return (
    <div className="bg-white relative group  flex flex-col gap-2 p-2 ">
      <div className="w-44 h-[70%]">
        <img className="w-full h-full object-cover" src={image} alt="item" />
      </div>
      <div className="">
        <p>{name}</p>
        <p className="font-bold pb-2">&#8377;{price}</p>
      </div>
      <button className="absolute top-[50%] z-30 left-[50%] transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200 opacity-0 text-3xl hover:rotate-45 group-hover:opacity-100">
        <FaCirclePlus fill="blue" />
      </button>
      <div className="absolute opacity-0 group-hover:opacity-30 top-0 left-0  w-full h-full transition-all duration-200 bg-slate-400"></div>
    </div>
  );
};

export default ProductCard;
