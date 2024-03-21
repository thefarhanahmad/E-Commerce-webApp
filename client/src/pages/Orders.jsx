import React, { useState } from "react";
import { items, orderItems } from "../data";
import { Link } from "react-router-dom";
const Orders = () => {
  const [page, setPage] = useState(1);
  console.log("order items", orderItems);

  return (
    <div className="bg-red-50 p-4 w-fit my-16 flex flex-col items-start gap-6 mx-auto">
      <h1 className="text-xl">MY ORDERS</h1>

      {/* table */}

      <table className="table-auto">
        <caption className="text-gray-800 mb-3">ORDERS</caption>
        <thead>
          <tr>
            <th className="px-4 py-2 border">ID</th>
            <th className="px-4 py-2 border">Quantity</th>
            <th className="px-4 py-2 border">Discount</th>
            <th className="px-4 py-2 border">Amount</th>
            <th className="px-4 py-2 border">Status</th>
            <th className="px-4 py-2 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {orderItems.map((item) => (
            <tr key={item.id}>
              <td className="border px-4 py-2">{item.id}</td>
              <td className="border px-4 py-2">{item.quantity}</td>
              <td className="border px-4 py-2">{item.discount}</td>
              <td className="border px-4 py-2">{item.amount}</td>
              <td className="border px-4 py-2 text-red-500">{item.status}</td>
              <td className="border px-4 py-2">
                <Link
                  to={`/order/${item.id}`}
                  className="bg-sky-300 w-fit rounded px-1 text-xs "
                >
                  {item.action}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <>
        paginaton is just for show, will modified later
        {/* pagination */}
        <div className="bg-green-400 w-full flex justify-between items-center gap-3">
          {items.length <= 1 ? (
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

          <span>{1} of 4</span>
          {items.length >= 4 ? (
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
      </>
    </div>
  );
};

export default Orders;
