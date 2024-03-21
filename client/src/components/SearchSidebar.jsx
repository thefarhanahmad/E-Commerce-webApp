import React from "react";

const SearchSidebar = ({
  sort,
  category,
  maxPrice,
  setSort,
  setMaxPrice,
  setCategory,
}) => {
  return (
    <div className="w-full flex flex-col gap-4 items-start p-2">
      <h1>FILTERS</h1>

      {/* sort,maxprice & category form */}
      <form className="flex flex-col gap-6 items-start">
        {/* sorting */}
        <div className="w-full flex flex-col items-start text-sm">
          <label htmlFor="sort">Sort</label>
          <select
            onChange={(e) => setSort(e.target.value)}
            className="w-full rounded outline-none"
            name="sort"
            value={sort}
            id={sort}
          >
            <option value="none">None</option>
            <option value="asc">Price ( low to high ) </option>
            <option value="dsc">Price ( high to low ) </option>
          </select>
        </div>

        {/* range max price */}
        <div className="w-full flex flex-col items-start text-sm">
          <label htmlFor="maxPrice">Max Price : 100000</label>
          <input
            onChange={(e) => setMaxPrice(parseInt(e.target.value))}
            value={maxPrice}
            className="w-full rounded outline-none"
            type="range"
            name="maxPrice"
            min={100}
            max={100000}
          />
        </div>

        {/* category */}
        <div className="w-full flex flex-col items-start text-sm">
          <label htmlFor="category">Category</label>
          <select
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded outline-none"
            name="category"
            value={category}
            id="category"
          >
            <option value="all">All</option>
            <option value="sample1">Sample 1</option>
            <option value="sample2">Sample 2</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default SearchSidebar;
