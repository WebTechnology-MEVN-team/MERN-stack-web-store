import { Publish } from "@mui/icons-material";
import { useState } from "react";
import styles from "./NewProduct.module.css";
import { useSelector, useDispatch } from "react-redux";

function NewProduct() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [productPictures, setProductPictures] = useState([]);

  const category = useSelector((state) => state.category);
  const dispatch = useDispatch();

  return (
    <div className={styles.newProduct}>
      <h1 className={styles.addProductTitle}>New Product</h1>
      <div className={styles.topCreate}>
        <div className={styles.productInfoLeft}>
          <img
            src="https://i.pinimg.com/736x/3a/5a/96/3a5a9634b87037c6c3537e6f076285ba.jpg"
            alt=""
          />
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
      <form className={styles.addProductForm}>
        <div className={styles.formLeft}>
          <div className={styles.addProductItem}>
            <label>Image</label>
            <label htmlFor="file">
              <Publish />
            </label>
            <input type="file" id="file" style={{ display: "none" }} />
          </div>
          <div className={styles.addProductItem}>
            <label>Name</label>
            <input
              type="text"
              placeholder="Product name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={styles.addProductItem}>
            <label>Price</label>
            <input
              type="number"
              placeholder="123"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className={styles.addProductItem}>
            <label>Quantity</label>
            <input
              type="text"
              placeholder="123"
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <div className={styles.addProductItem}>
            <label>Category</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>
        <div className={styles.formRight}>
          <div className={styles.addProductItem}>
            <label>Descriptions</label>
            <textarea
              name="description"
              id=""
              cols="50"
              rows="10"
              placeholder="Product descriptions in here ..."
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <button className={styles.addProductButton}>Create</button>
        </div>
      </form>
    </div>
  );
}

export default NewProduct;
