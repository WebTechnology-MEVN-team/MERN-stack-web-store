import React from "react";
import "./home.css";
import { Routes, Route } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import Dashboard from "../dashboard/Dashboard";
import ProductList from "../productList/ProductList";
import UserList from "../userList/UserList";
import NewProduct from "../newProduct/NewProduct";
import NewUser from "../newUser/NewUser";
import ProductDetail from "../productDetails/ProductDetails";
import UserDetails from "../userDetails/UserDetails";

function Home() {
  return (
    <div className="dashboard">
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="*" element={<Dashboard />} />

          <Route path="products" element={<ProductList />} />
          <Route path="products/create" element={<NewProduct />} />
          <Route path="products/:id" element={<ProductDetail />} />
          <Route path="products/edit/:id" element={<ProductDetail />} />

          <Route path="users" element={<UserList />} />
          <Route path="users/create" element={<NewUser />} />
          <Route path="users/:id" element={<UserDetails />} />
          <Route path="users/edit/:id" element={<UserDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default Home;
