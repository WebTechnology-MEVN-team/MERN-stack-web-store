import styles from "./Sidebar.module.css";
import {
  AttachMoney,
  CategoryOutlined,
  ChatBubbleOutline,
  CommentOutlined,
  LineStyle,
  MailOutline,
  PersonOutline,
  Storefront,
  Timeline,
  TrendingUp,
} from "@mui/icons-material";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.wrapper}>
        <div className={styles.menu}>
          <h3 className={styles.title}>Dashboard</h3>
          <ul className={styles.list}>
            <li className={`${styles.listItem} ${styles.active}`}>
              <LineStyle className={styles.icon} />
              Home
            </li>
            <li className={styles.listItem}>
              <Timeline className={styles.icon} />
              Analytics
            </li>
            <li className={styles.listItem}>
              <TrendingUp className={styles.icon} />
              Sales
            </li>
          </ul>
        </div>
        <div className={styles.menu}>
          <h3 className={styles.title}>Quick Menu</h3>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <PersonOutline className={styles.icon} />
              User
            </li>
            <li className={styles.listItem}>
              <Storefront className={styles.icon} />
              Products
            </li>
            <li className={styles.listItem}>
              <CategoryOutlined className={styles.icon} />
              Categories
            </li>
            <li className={styles.listItem}>
              <AttachMoney className={styles.icon} />
              Transaction
            </li>
          </ul>
        </div>
        <div className={styles.menu}>
          <h3 className={styles.title}>Notification</h3>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <MailOutline className={styles.icon} />
              Mail
            </li>
            <li className={styles.listItem}>
              <CommentOutlined className={styles.icon} />
              Comments
            </li>
            <li className={styles.listItem}>
              <ChatBubbleOutline className={styles.icon} />
              Messages
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
