import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { items } from "../data";
const Home = () => {
  console.log("items  : ", items);

  return (
    // wrapper
    <div className="w-full py-10 bg-red-300">
      {/* poster background */}
      <div className="poster w-3/4 mx-auto h-60 mb-10">
        <img
          className="w-full h-full object-cover"
          src="https://www.loveinstore.com/assets/images/ecombannernew.png"
          alt="poster"
        />
      </div>

      {/* products list */}
      <div className=" gap-3 flex flex-col w-3/4 mx-auto">
        <div className="flex justify-between">
          <span>LATEST PRODUCTS</span>
          <Link to="/search">MORE</Link>
        </div>

        {/* list items */}
        <div className="flex gap-4 flex-wrap">
          {items.map((item) => (
            <ProductCard
              key={item.id}
              name={item.name}
              image={item.imageUrl}
              price={item.price}
              addToCart={item.addToCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
