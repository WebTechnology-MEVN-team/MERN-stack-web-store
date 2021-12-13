import React, { useState, useEffect } from "react";
import styles from "./CategoryList.module.css";
import { Col, Container, Row } from "react-bootstrap";
import {
  IoIosCheckboxOutline,
  IoIosCheckbox,
  IoIosArrowForward,
  IoIosArrowDown,
} from "react-icons/io";

import {
  AddCircleOutline,
  DeleteOutline,
  ModeOutlined,
} from "@mui/icons-material";

import CheckboxTree from "react-checkbox-tree";
import "react-checkbox-tree/lib/react-checkbox-tree.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { useDispatch, useSelector } from "react-redux";
import { getAllCategories, addCategory } from "../../actions";
import AddCategoryModal from "../../components/category/AddCatModal";
import UpdateCategoriesModal from "../../components/category/UpdateCatModal";

function CategoryList() {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category);
  const [categoryName, setCategoryName] = useState("");
  const [parentCategoryId, setParentCategoryId] = useState("");
  const [categoryImage, setCategoryImage] = useState("");

  const [show, setShow] = useState(false);
  const [checked, setChecked] = useState([]);
  const [expanded, setExpanded] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  const [checkedArray, setCheckedArray] = useState([]);
  const [expandedArray, setExpandedArray] = useState([]);

  useEffect(() => {
    dispatch(getAllCategories());
  }, []);

  //Show list data
  const getCategoriesList = (categories) => {
    let myCategories = [];
    for (let category of categories) {
      myCategories.push({
        label: category.name,
        value: category._id,
        children:
          category.children.length > 0 && getCategoriesList(category.children),
      });
    }
    return myCategories;
  };
  //Get data to list with ifo parent
  const createCategoryList = (categories, options = []) => {
    for (let category of categories) {
      options.push({
        value: category._id,
        name: category.name,
        parentId: category.parentId,
        type: category.type,
      });
      if (category.children.length > 0) {
        createCategoryList(category.children, options);
      }
    }
    return options;
  };

  //Update checked & expanded items
  const updateItemToArray = () => {
    const categories = createCategoryList(category.categories);
    const checkedArray = [];
    const expandedArray = [];

    checked.length > 0 &&
      checked.forEach((categoryId, index) => {
        const category = categories.find(
          (category, _index) => categoryId == category.value
        );
        category && checkedArray.push(category);
      });

    expanded.length > 0 &&
      expanded.forEach((categoryId, index) => {
        const category = categories.find(
          (category, _index) => categoryId == category.value
        );
        category && expandedArray.push(category);
      });

    setCheckedArray(checkedArray);
    setExpandedArray(expandedArray);
  };

  //Add new category zone
  const handleCategoryImage = (e) => {
    setCategoryImage(e.target.files[0]);
  };

  const handleAddSubmit = () => {
    const form = new FormData();
    if (categoryName === "") {
      alert("Category name is required");
      setShow(false);
      return;
    }

    form.append("name", categoryName);
    form.append("parentId", parentCategoryId);
    form.append("categoryImage", categoryImage);

    dispatch(addCategory(form));

    setCategoryName("");
    setParentCategoryId("");
    setShow(false);
  };

  //Update categories zone
  const handleCategoryInput = () => {};

  const handleUpdateSubmit = () => {
    updateItemToArray();
  };

  //Delete categories zone
  const deleteCategory = () => {
    console.log("Deleted");
  };

  //for list in Modal
  const categoryList = createCategoryList(category.categories);

  return (
    <div className={styles.categoriesList}>
      <div className={styles.topTitleContainer}>
        <h1 className={styles.categoryTitle}>Categories</h1>
        <div className={styles.leftContainer}>
          <div
            className={`${styles.iconContainer} ${styles.actionGreen}`}
            onClick={() => {
              setShow(true);
            }}
          >
            <AddCircleOutline />
          </div>
          <div
            className={`${styles.iconContainer} ${styles.actionRed}`}
            onClick={deleteCategory}
          >
            <DeleteOutline />
          </div>
          <div
            className={`${styles.iconContainer} ${styles.actionBlue}`}
            onClick={() => {
              setIsUpdate(true);
            }}
          >
            <ModeOutlined />
          </div>
        </div>
      </div>
      <Container>
        <Row>
          <Col>
            <CheckboxTree
              nodes={getCategoriesList(category.categories)}
              checked={checked}
              expanded={expanded}
              onCheck={(checked) => setChecked(checked)}
              onExpand={(expanded) => setExpanded(expanded)}
              icons={{
                check: <IoIosCheckbox />,
                uncheck: <IoIosCheckboxOutline />,
                halfCheck: <IoIosCheckboxOutline />,
                expandClose: <IoIosArrowForward />,
                expandOpen: <IoIosArrowDown />,
              }}
            />
          </Col>
        </Row>
      </Container>
      <AddCategoryModal
        show={show}
        handleClose={() => setShow(false)}
        onSubmit={handleAddSubmit}
        modalTitle={"Add New Category"}
        categoryName={categoryName}
        setCategoryName={setCategoryName}
        parentCategoryId={parentCategoryId}
        setParentCategoryId={setParentCategoryId}
        categoryList={categoryList}
        handleCategoryImage={handleCategoryImage}
      />
      <UpdateCategoriesModal
        show={isUpdate}
        handleClose={() => setIsUpdate(false)}
        onSubmit={handleUpdateSubmit}
        modalTitle={"Update Categories"}
        size="lg"
        expandedArray={expandedArray}
        checkedArray={checkedArray}
        handleCategoryInput={handleCategoryInput}
        categoryList={categoryList}
      />
    </div>
  );
}

export default CategoryList;
