import "./productList.css";
import { DeleteOutline } from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../actions";

function ProductList() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  console.log(product);

  const getProductList = (products) => {
    let myProducts = [];
    for (let product of products) {
      myProducts.push({
        id: product._id,
        name: product.name,
        category: product.category.name,
        picture:
          product.productPictures.length > 0 ? product.productPictures[0] : "",
        price: product.price,
        quantity: product.quantity,
      });
    }
    return myProducts;
  };

  const handleDelete = (id) => {
    console.log("delete", id);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "product",
      headerName: "Product",
      width: 250,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "category", headerName: "Category", width: 200 },
    {
      field: "quantity",
      headerName: "Quantity",
      width: 120,
    },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <React.Fragment>
            <Link to={"edit/" + params.row.id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </React.Fragment>
        );
      },
    },
  ];

  const data = getProductList(product.products);
  console.log("ProductList [.] data", data);

  return (
    <div className="productList">
      <div className="productListTop">
        <h1 className="topTitle">Products</h1>
        <Link to="/products/create">
          <button className="productCreateButton">Create</button>
        </Link>
      </div>
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}

export default ProductList;
