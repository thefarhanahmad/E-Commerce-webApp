import React, { useEffect, useState } from "react";
import { cartItems, cartPrices } from "../data";
import CartItemsCard from "../components/CartItemsCard";
import { MdErrorOutline } from "react-icons/md";
import { Link } from "react-router-dom";

const Cart = () => {
  console.log("cart items : ", cartItems);

  // declaring state variable
  const [isValidCoupon, setIsValidCoupon] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  console.log("coupon code : ", couponCode);

  useEffect(() => {
    const timeOutID = setTimeout(() => {
      if (Math.random() > 0.5) setIsValidCoupon(true);
      else setIsValidCoupon(false);
    }, 1000);

    return () => {
      clearTimeout(timeOutID);
      setIsValidCoupon(false);
    };
  }, [couponCode]);

  return (
    <div className="bg-red-400 w-3/4 h-screen overflow-hidden mx-auto py-10">
      {cartItems.length > 0 ? (
        // if items exists
        <div className="w-full flex">
          {/* items side */}
          <div className="bg-yellow-200 overflow-y-auto w-[60%] flex flex-col gap-3">
            {cartItems.map((item) => (
              <CartItemsCard
                key={item.id}
                id={item.id}
                name={item.name}
                removeFromCart={item.removeFromCart}
                price={item.price}
                image={item.imageUrl}
              />
            ))}
          </div>
          {/* price side */}
          <div className="bg-gray-300 border border-black w-[40%] flex flex-col gap-1 justify-center items-start pl-4 h-80 text-sm">
            <p>SubTotal : &#8377;{cartPrices.subTotal}</p>
            <p>Shipping Charges : &#8377;{cartPrices.ShippingCharges}</p>
            <p>Tax : &#8377;{cartPrices.tax}</p>
            <p>Discount : &#8377;{cartPrices.discount}</p>
            <p className="font-bold">Total : &#8377;{cartPrices.total}</p>

            <input
              type="text"
              placeholder="Coupon Code"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              className="outline-none p-1 pl-2 rounded"
            />
            <p>
              {couponCode && (
                <span className="text-xs">
                  {isValidCoupon ? (
                    <span className="text-green-600">
                      {cartPrices.discount} off using {couponCode}
                    </span>
                  ) : (
                    <span className="text-red-600 flex justify-center items-center gap-1">
                      <MdErrorOutline />
                      Invalid Coupon Code
                    </span>
                  )}
                </span>
              )}
            </p>
            {/* checkout button */}
            <div className="mt-3 self-center">
              {cartItems.length > 0 && (
                <Link
                  className="bg-sky-600 text-white py-1 px-3 rounded font-semibold text-lg"
                  to={"/shipping"}
                >
                  Checkout
                </Link>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div>No items found</div>
      )}
    </div>
  );
};

export default Cart;
