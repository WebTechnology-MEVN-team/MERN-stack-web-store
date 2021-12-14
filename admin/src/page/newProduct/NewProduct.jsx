import { Publish } from "@mui/icons-material";
import { useEffect, useState } from "react";
import styles from "./NewProduct.module.css";
import { useSelector, useDispatch } from "react-redux";
import { addProduct, getAllCategories } from "../../actions";

function NewProduct() {
  const [name, setName] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");
  const [productPictures, setProductPictures] = useState([]);

  const category = useSelector((state) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategories());
  }, []);

  const getCategoriesList = (categories, options = []) => {
    for (let category of categories) {
      options.push({ value: category._id, name: category.name });
      if (category.children.length > 0) {
        getCategoriesList(category.children, options);
      }
    }

    return options;
  };

  const handleSubmit = async () => {
    const form = new FormData();
    form.append("name", name);
    form.append("quantity", quantity);
    form.append("price", price);
    form.append("description", description);
    form.append("category", categoryId);

    for (let pic of productPictures) {
      form.append("productPicture", pic);
    }

    dispatch(addProduct(form));
  };

  const handleProductPicture = (e) => {
    setProductPictures([...productPictures, e.target.files[0]]);
    console.log(e.target.files[0]);
  };

  return (
    <div className={styles.newProduct}>
      <h1 className={styles.addProductTitle}>New Product</h1>
      <div className={styles.topCreate}>
        <div className={styles.productInfoLeft}>
          {productPictures.length > 0 && (
            <img src={URL.createObjectURL(productPictures[0])} alt="" />
          )}
        </div>
        <div className={styles.productInfoRight}>
          <div className={styles.productInfoItem}>
            <span className={styles.productInfoKey}>
              <h5>Name:</h5>
            </span>
            <span className={styles.productInfoValue}>
              <h5>{name}</h5>
            </span>
          </div>
          <div className={styles.productInfoItem}>
            <span className={styles.productInfoKey}>price:</span>
            <span className={styles.productInfoValue}>{price}</span>
          </div>
          <div className={styles.productInfoItem}>
            <span className={styles.productInfoKey}>quantity:</span>
            <span className={styles.productInfoValue}>{quantity}</span>
          </div>
          <div className={styles.productInfoItem}>
            <span className={styles.productInfoKey}>category:</span>
            <span className={styles.productInfoValue}>{categoryId}</span>
          </div>
        </div>
      </div>
      <div className={styles.addProductForm}>
        <div className={styles.formLeft}>
          <div className={styles.addProductItem}>
            <label>Image</label>
            <label htmlFor="file">
              <Publish />
            </label>
            {productPictures.length > 0
              ? productPictures.map((pic, index) => (
                  <div key={index}>{pic.name}</div>
                ))
              : null}
            <input
              type="file"
              id="file"
              style={{ display: "none" }}
              onChange={(e) => handleProductPicture(e)}
            />
          </div>
          <div className={styles.addProductItem}>
            <label>Name</label>
            <input
              required
              type="text"
              placeholder="Product name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={styles.addProductItem}>
            <label>Price</label>
            <input
              required
              type="number"
              placeholder="123"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className={styles.addProductItem}>
            <label>Quantity</label>
            <input
              required
              type="text"
              placeholder="123"
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <div className={styles.addProductItem}>
            <label>Category</label>
            <select
              value={categoryId}
              onChange={(e) => setCategoryId(e.target.value)}
            >
              <option value={null}>None</option>
              {getCategoriesList(category.categories).map((option) => (
                <option key={option.value} value={option.value}>
                  {option.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className={styles.formRight}>
          <div className={styles.addProductItem}>
            <label>Descriptions</label>
            <textarea
              required
              id=""
              cols="50"
              rows="10"
              placeholder="Product descriptions in here ..."
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <button className={styles.addProductButton} onClick={handleSubmit}>
            Create
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewProduct;
