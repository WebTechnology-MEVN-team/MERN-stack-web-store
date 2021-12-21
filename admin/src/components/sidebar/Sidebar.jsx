import styles from "./Sidebar.module.css";
import {
  ShoppingCartOutlined,
  CategoryOutlined,
  PeopleAltOutlined,
  Storefront,
  NoteAddOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.wrapper}>
        <div className={styles.menu}>
          <h3 className={styles.title}>Dashboard</h3>
          <Link to="" className="link">
            <li className={`${styles.listItem} ${styles.active}`}>
              <NoteAddOutlined className={styles.icon} />
              Pages
            </li>
          </Link>
        </div>
        <div className={styles.menu}>
          <h3 className={styles.title}>Quick Menu</h3>
          <ul className={styles.list}>
            <Link to="/users" className="link">
              <li className={styles.listItem}>
                <PeopleAltOutlined className={styles.icon} />
                User
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className={styles.listItem}>
                <Storefront className={styles.icon} />
                Products
              </li>
            </Link>
            <Link to="/categories" className="link">
              <li className={styles.listItem}>
                <CategoryOutlined className={styles.icon} />
                Categories
              </li>
            </Link>
            <Link to="/orders" className="link">
              <li className={styles.listItem}>
                <ShoppingCartOutlined className={styles.icon} />
                Oder
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
