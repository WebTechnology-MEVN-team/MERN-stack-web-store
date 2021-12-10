import React from "react";
import styles from "./CategoryList.module.css";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllCategories } from "../../actions/";
import { DeleteOutline } from "@mui/icons-material";

function CategoryList() {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category);
  console.log(category);

  useEffect(() => {
    dispatch(getAllCategories());
  }, []);

  let categoriesData = [];
  const categories = category.categories;
  for (let category of categories) {
    categoriesData.push({
      id: category._id,
      name: category.name,
      img: category.categoryImage,
    });
  }
  console.log(categoriesData);

  const handleDelete = (id) => {
    console.log("Deleted", id);
  };

  const columns = [
    { field: "id", headerName: "Id", width: 250 },
    {
      field: "category",
      headerName: "Category",
      width: 200,
      renderCell: (params) => {
        return (
          <div className={styles.list}>
            <img className={styles.listImg} src={params.row.img} alt="" />
          </div>
        );
      },
    },
    { field: "name", headerName: "Name", width: 250 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <React.Fragment>
            <Link to={"edit/" + params.row.id}>
              <button className={styles.listEdit}>Edit</button>
            </Link>
            <DeleteOutline
              className={styles.listDelete}
              onClick={() => handleDelete(params.row.id)}
            />
          </React.Fragment>
        );
      },
    },
  ];

  return (
    <div className={styles.categoriesList}>
      <div className={styles.topTitleContainer}>
        <h1 className={styles.categoryTitle}>Categories</h1>
        <Link to="create">
          <button className={styles.createButton}>Create</button>
        </Link>
      </div>
      <DataGrid
        rows={categoriesData}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
      />
    </div>
  );
}

export default CategoryList;
