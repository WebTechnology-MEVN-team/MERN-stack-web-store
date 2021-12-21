import React from "react";
import styles from "./Home.module.css";
import { Routes, Route } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import ProductList from "../productList/ProductList";
import UserList from "../userList/UserList";
import NewProduct from "../newProduct/NewProduct";
import NewUser from "../newUser/NewUser";
import ProductDetail from "../productDetails/ProductDetails";
import UserDetails from "../userDetails/UserDetails";
import CategoryList from "../categoryList/CategoryList";
import OrderList from "../orderList/OrderList";
import Page from "../page/Page";

function Home() {
  return (
    <div className="dashboard">
      <Topbar />
      <div className={styles.container}>
        <Sidebar />
        <Routes>
          <Route path="*" element={<Page />} />

          <Route path="products" element={<ProductList />} />
          <Route path="products/create" element={<NewProduct />} />
          <Route path="products/:id" element={<ProductDetail />} />
          <Route path="products/edit/:id" element={<ProductDetail />} />

          <Route path="users" element={<UserList />} />
          <Route path="users/create" element={<NewUser />} />
          <Route path="users/:id" element={<UserDetails />} />
          <Route path="users/edit/:id" element={<UserDetails />} />

          <Route path="orders" element={<OrderList />} />

          <Route path="categories" element={<CategoryList />} />
        </Routes>
      </div>
    </div>
  );
}

export default Home;
