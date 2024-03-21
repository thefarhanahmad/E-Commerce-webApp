import React, { useState } from "react";
import SearchSidebar from "../components/SearchSidebar";
import ProductCard from "../components/ProductCard";
import { items } from "../data";

const Search = () => {
  // declaring state variable
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);
  const [maxPrice, setMaxPrice] = useState(10000);

  console.log("values : ", search, sort, category, page, maxPrice);

  return (
    <div className="w-full h-[95vh] flex flex-col pt-6 pb-4 gap-1 bg-red-50 px-1">
      {/* main container */}
      <div className="w-full h-full bg-red-50 mx-auto flex gap-4 px-3">
        {/* sidebar */}
        <div className="bg-red-400 w-[25%]">
          <SearchSidebar
            sort={sort}
            setSort={setSort}
            setCategory={setCategory}
            setMaxPrice={setMaxPrice}
            category={category}
            maxPrice={maxPrice}
          />
        </div>

        {/* search and products */}
        <div className="bg-yellow-300 w-[75%] flex flex-col gap-4 items-start p-2">
          <h1 className="text-xl text-gray-700">PRODUCTS</h1>

          {/* search input */}
          <div className="w-3/4">
            <input
              type="text"
              value={search}
              name="search"
              placeholder="Searching by name..."
              onChange={(e) => setSearch(e.target.value)}
              className="w-full p-2 outline-none rounded"
            />
          </div>

          {/* products list */}
          <div className=" flex gap-3">
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

      {/* pagination */}
      <div className="bg-green-400 flex justify-center items-center gap-3">
        {page <= 1 ? (
          <button
            disabled={true}
            className="bg-sky-400 w-fit text-xs font-semibold text-white py-1 px-3 rounded"
          >
            Pre
          </button>
        ) : (
          <button
            onClick={() => setPage((pre) => pre - 1)}
            className="bg-sky-600 w-fit text-xs font-semibold text-white py-1 px-3 rounded"
          >
            Pre
          </button>
        )}

        <span>{page} of 4</span>
        {page >= 4 ? (
          <button
            disabled={true}
            className="bg-sky-400 w-fit text-xs font-semibold text-white py-1 px-3 rounded"
          >
            Next
          </button>
        ) : (
          <button
            onClick={() => setPage((pre) => pre + 1)}
            className="bg-sky-600 w-fit text-xs font-semibold text-white py-1 px-3 rounded"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Search;
