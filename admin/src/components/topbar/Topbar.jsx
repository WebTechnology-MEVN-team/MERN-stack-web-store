import styles from "./Topbar.module.css";
import { NotificationsNone, Logout, Settings } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/auth.actions";

function Topbar() {
  // const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

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
            <Logout onClick={handleLogout} />
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
