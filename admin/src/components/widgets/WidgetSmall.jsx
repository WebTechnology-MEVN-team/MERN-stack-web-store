import styles from "./WidgetSmall.module.css";
import { Visibility } from "@mui/icons-material";

function WidgetSmall() {
  return (
    <div className={styles.widgetSmall}>
      <span className={styles.smallTitle}>New Join Members</span>
      <ul className={styles.smallList}>
        <li className={styles.smallListItem}>
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className={styles.smallImg}
          />
          <div className={styles.smallUser}>
            <span className={styles.smallUsername}>Anna Keller</span>
            <span className={styles.smallUserTitle}>Software Engineer</span>
          </div>
          <button className={styles.smallButton}>
            <Visibility className={styles.smallIcon} />
            Display
          </button>
        </li>
        <li className={styles.smallListItem}>
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className={styles.smallImg}
          />
          <div className={styles.smallUser}>
            <span className={styles.smallUsername}>Anna Keller</span>
            <span className={styles.smallUserTitle}>Software Engineer</span>
          </div>
          <button className={styles.smallButton}>
            <Visibility className={styles.smallIcon} />
            Display
          </button>
        </li>
        <li className={styles.smallListItem}>
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className={styles.smallImg}
          />
          <div className={styles.smallUser}>
            <span className={styles.smallUsername}>Anna Keller</span>
            <span className={styles.smallUserTitle}>Software Engineer</span>
          </div>
          <button className={styles.smallButton}>
            <Visibility className={styles.smallIcon} />
            Display
          </button>
        </li>
        <li className={styles.smallListItem}>
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className={styles.smallImg}
          />
          <div className={styles.smallUser}>
            <span className={styles.smallUsername}>Anna Keller</span>
            <span className={styles.smallUserTitle}>Software Engineer</span>
          </div>
          <button className={styles.smallButton}>
            <Visibility className={styles.smallIcon} />
            Display
          </button>
        </li>
        <li className={styles.smallListItem}>
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className={styles.smallImg}
          />
          <div className={styles.smallUser}>
            <span className={styles.smallUsername}>Anna Keller</span>
            <span className={styles.smallUserTitle}>Software Engineer</span>
          </div>
          <button className={styles.smallButton}>
            <Visibility className={styles.smallIcon} />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}

export default WidgetSmall;
