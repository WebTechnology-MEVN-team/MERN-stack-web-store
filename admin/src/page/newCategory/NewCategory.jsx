import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import styles from "./NewCategory.module.css";

function NewCategory() {
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
              <span className={styles.showCategoryName}>Anna Becker</span>
            </div>
          </div>
          <div className={styles.showBottom}>
            <span className={styles.showTitle}>Account Details</span>
            <div className={styles.showDetails}>
              <PermIdentity className={styles.showIcon} />
              <span className={styles.showInfoTitle}>annabeck99</span>
            </div>
            <div className={styles.showDetails}>
              <CalendarToday className={styles.showIcon} />
              <span className={styles.showInfoTitle}>10.12.1999</span>
            </div>
          </div>
        </div>
        <div className={styles.create}>
          <span className={styles.createTitle}>Edit</span>
          <form className={styles.createForm}>
            <div className={styles.createLeft}>
              <div className={styles.createItem}>
                <label>Username</label>
                <input
                  type="text"
                  placeholder="annabeck99"
                  className={styles.createInput}
                />
              </div>
              <div className={styles.createItem}>
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Anna Becker"
                  className={styles.createInput}
                />
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
              <button className={styles.createNewButton}>Create new</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewCategory;
