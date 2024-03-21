import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import { Suspense, lazy } from "react";
import Orders from "./pages/Orders";
import OrderDetails from "./pages/OrderDetails";

// importing pages
const Home = lazy(() => import("./pages/Home"));
const Search = lazy(() => import("./pages/Search"));
const Cart = lazy(() => import("./pages/Cart"));
const Checkout = lazy(() => import("./pages/Checkout"));
const Login = lazy(() => import("./pages/Login"));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));

function App() {
  return (
    <div className="text-center ">
      {/* Navbar */}
      <Navbar />

      {/* Routes */}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Orders />} />
          <Route path="/order/:id" element={<OrderDetails />} />
          <Route path="/shipping" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/product/:id" element={<Orders />} /> */}
          <Route path="/admin/dashboard-admin" element={<AdminDashboard />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
