import React from "react";
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const CartItemsCard = ({ id, name, image, price, removeFromCart }) => {
  return (
    <div className="bg-blue-200 overflow-y-auto overflow-hidden h-28 px-2 items-center flex w-full">
      {/* item*/}
      <div className="w-full flex gap-2">
        <Link to={`/product/${id}`} className="w-32 ">
          <img className="w-full object-cover" src={image} alt="item" />
        </Link>
        <div className="flex flex-col justify-center items-start text-sm">
          <p>{name}</p>
          <p className="font-bold">&#8377;{price}</p>
        </div>
      </div>

      {/* buttons */}
      <div className="flex justify-center items-center  text-2xl gap-3">
        <div className="flex justify-center items-center gap-1">
          <CiSquarePlus />
          <span className="text-sm font-semibold">4</span>
          <CiSquareMinus />
        </div>
        <button onClick={() => removeFromCart}>
          {" "}
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

export default CartItemsCard;
