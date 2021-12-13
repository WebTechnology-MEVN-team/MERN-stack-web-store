import {
  BorderColorOutlined,
  Publish,
  SettingsEthernetOutlined,
} from "@mui/icons-material";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import styles from "./NewCategory.module.css";

function NewCategory() {
  const [categoryName, setCategoryName] = useState();
  const [parentCategoryId, setParentCategoryId] = useState();
  const [categoryImage, setCategoryImage] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCategory = {
      categoryName,
      parentCategoryId,
    };
    console.log(newCategory);
  };

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Create New Category</h1>
      </div>
      <div className={styles.categoryContainer}>
        <div className={styles.show}>
          <div className={styles.showTop}>
            <img
              src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className={styles.showImg}
            />
            <div className={styles.showTopTitle}>
              <span className={styles.showCategoryName}>{categoryName}</span>
            </div>
          </div>
          <div className={styles.showBottom}>
            <span className={styles.showTitle}>Category details</span>
            <div className={styles.showDetails}>
              <BorderColorOutlined className={styles.showIcon} />
              <span className={styles.showInfoTitle}>{categoryName}</span>
            </div>
            <div className={styles.showDetails}>
              <SettingsEthernetOutlined className={styles.showIcon} />
              <span className={styles.showInfoTitle}>{parentCategoryId}</span>
            </div>
          </div>
        </div>
        <div className={styles.create}>
          <span className={styles.createTitle}>New</span>
          <form className={styles.createForm} onSubmit={handleSubmit}>
            <div className={styles.createLeft}>
              <div className={styles.createItem}>
                <label>Category name</label>
                <input
                  type="text"
                  required
                  className={styles.createInput}
                  value={categoryName}
                  onChange={(e) => setCategoryName(e.target.value)}
                />
              </div>
              <div className={styles.createItem}>
                {/* <label>Parent</label>
                <input
                  type="text"
                  className={styles.createInput}
                  value={parentCategoryId}
                  onChange={(e) => setParentCategoryId(e.target.value)}
                /> */}
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel id="select-parent-label">Parent</InputLabel>
                  <Select
                    labelId="select-parent-label"
                    id="select-parent"
                    // value={age}
                    // onChange={handleChange}
                    label="Parent"
                    className={styles.createInput}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
            <div className={styles.createRight}>
              <div className={styles.createUpload}>
                <img
                  className={styles.addImage}
                  src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className={styles.addIcon} />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button type="submit" className={styles.createNewButton}>
                Create new
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewCategory;
