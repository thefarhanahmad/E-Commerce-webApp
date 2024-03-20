import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GoSearch } from "react-icons/go";
import { BsBag } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { CiLogin, CiLogout } from "react-icons/ci";
const Navbar = () => {
  // fetching user
  const user = {
    name: "user",
    role: "Admin",
  };

  // state var to control dialog modal
  const [dialog, setDialog] = useState(false);
  console.log("dialog : ", dialog);

  const logOutHandler = () => {
    setDialog(false);
  };

  return (
    <div className="bg-green-400 w-full flex gap-4 h-16 justify-between px-6 items-center">
      {/* icon */}
      <span>ShoppingCart</span>

      {/* navlinks */}
      <div className="flex gap-4 justify-center items-center">
        <Link onClick={() => setDialog(false)} to={"/"}>
          Home
        </Link>
        <Link onClick={() => setDialog(false)} to={"/search"}>
          <GoSearch />
        </Link>
        <Link onClick={() => setDialog(false)} to={"/cart"}>
          <BsBag />
        </Link>

        {/* if user exists */}
        <div className="relative">
          {user ? (
            <button onClick={() => setDialog((pre) => !pre)}>
              <AiOutlineUser />
            </button>
          ) : (
            <span>
              <CiLogin />
            </span>
          )}

          {/* dialog */}
          <dialog
            open={dialog}
            className="w-fit absolute p-2 top-8 -left-16 text-sm rounded-sm border "
          >
            <div className=" w-full flex flex-col gap-1 justify-center items-center">
              {user.role === "Admin" && (
                <Link
                  className=""
                  onClick={() => setDialog(false)}
                  to={"admin/dashboard-admin"}
                >
                  Dashboard
                </Link>
              )}
              <Link onClick={() => setDialog(false)} to={"/order"}>
                Orders
              </Link>
              <button onClick={logOutHandler} to={"/"}>
                <CiLogout />
              </button>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
