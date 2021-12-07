import styles from "./Topbar.module.css";
import { NotificationsNone, Logout, Settings } from "@mui/icons-material";

function Topbar() {
  return (
    <div className={styles.topbar}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <span className={styles.logo}>MEVN-team</span>
        </div>
        <div className={styles.right}>
          <div className={styles.iconContainer}>
            <NotificationsNone />
            <span className={styles.iconBadge}>2</span>
          </div>
          <div className={styles.iconContainer}>
            <Settings />
            <span className={styles.iconBadge}>2</span>
          </div>
          <div className={styles.iconContainer}>
            <Logout />
          </div>
          <img
            src="https://avatarfiles.alphacoders.com/855/thumb-1920-85557.png"
            alt=""
            className={styles.avatar}
          />
        </div>
      </div>
    </div>
  );
}

export default Topbar;
