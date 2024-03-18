import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Cart from "./pages/Cart";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <div className="text-center mt-64 bg-red-500">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/admin/dashboard-admin" element={<AdminDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
