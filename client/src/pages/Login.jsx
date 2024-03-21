import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  // declaring state var for data
  const [formData, setFormData] = useState({
    gender: "",
    dob: "",
  });
  console.log("formData : ", formData);

  // declaring onchange handler
  const onChangeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // submit handler
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("formdata info submitted : ", formData);
  };

  return (
    <div className="w-11/12 mx-auto flex-col py-6 flex gap-16">
      {/* form */}
      <div className=" border flex flex-col gap-6 py-6  w-1/2 sm:w-1/2 mx-auto">
        <h1 className="text-xl font-semibold">LOGIN</h1>
        <form
          onSubmit={submitHandler}
          className="w-full flex flex-col gap-2 p-2"
        >
          <select
            onChange={onChangeHandler}
            name="gender"
            value={formData.gender}
            id="gender"
            className="p-2 border-2 outline-none w-full"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Others">Others</option>
          </select>
          <input
            onChange={onChangeHandler}
            type="date"
            value={formData.dob}
            name="dob"
            className="p-2 border-2 outline-none w-full"
          />
          <span className="text-xs font-semibold opacity-70">
            Already Signed in Once
          </span>
          <button
            type="submit"
            className=" flex mt-4 justify-center items-center text-white w-fit self-center border rounded-sm"
          >
            <span className="p-1 text-lg">
              <FcGoogle />
            </span>
            <span className="bg-sky-400 text-sm p-1">Sign in with Google</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
