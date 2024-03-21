import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoArrowBackCircleOutline } from "react-icons/io5";

const Checkout = () => {
  // declaring state var for data
  const [shippingInfo, setShippingInfo] = useState({
    address: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
  });
  console.log("shippinginfo : ", shippingInfo);

  // declaring onchange handler
  const onChangeHandler = (e) => {
    setShippingInfo({
      ...shippingInfo,
      [e.target.name]: e.target.value,
    });
  };

  // submit handler
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("shipping info submitted : ", shippingInfo);
  };

  return (
    <div className="w-11/12 mx-auto flex-col py-6 flex gap-16">
      {/* back button */}
      <Link className="w-full text-start text-3xl" to={"/cart"}>
        <IoArrowBackCircleOutline className="bg-black text-white rounded-full p-1" />
      </Link>

      {/* form */}
      <div className=" border flex flex-col gap-6 pt-4  w-1/2 sm:w-1/2 mx-auto">
        <h1 className="text-xl font-semibold">SHIPPING ADDRESS</h1>
        <form
          onSubmit={submitHandler}
          className="w-full flex flex-col gap-2 p-2"
        >
          <input
            onChange={onChangeHandler}
            type="text"
            value={shippingInfo.address}
            placeholder="Address"
            name="address"
            className="p-2 border-2 outline-none w-full"
          />
          <input
            onChange={onChangeHandler}
            type="text"
            value={shippingInfo.city}
            placeholder="City"
            name="city"
            className="p-2 border-2 outline-none w-full"
          />
          <input
            onChange={onChangeHandler}
            type="text"
            value={shippingInfo.state}
            placeholder="State"
            name="state"
            className="p-2 border-2 outline-none w-full"
          />
          <select
            onChange={onChangeHandler}
            name="country"
            value={shippingInfo.country}
            id="country"
            className="p-2 border-2 outline-none w-full"
          >
            <option value="">Choose Country</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            {/* <option value="Bihar"></option> */}
          </select>
          <input
            onChange={onChangeHandler}
            type="text"
            value={shippingInfo.pincode}
            placeholder="Pin Code"
            name="pincode"
            className="p-2 border-2 outline-none w-full"
          />
          <button
            type="submit"
            className="bg-sky-600 text-white p-1 rounded-sm"
          >
            PAY NOW
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
