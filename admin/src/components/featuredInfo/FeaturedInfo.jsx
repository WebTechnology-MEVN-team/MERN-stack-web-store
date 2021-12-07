import styles from "./FeatureInfo.module.css";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

function FeaturedInfo() {
  return (
    <div className={styles.featured}>
      <div className={styles.item}>
        <span className={styles.title}>Revanue</span>
        <div className={styles.moneyContainer}>
          <span className={styles.money}>$2,415</span>
          <span className={styles.moneyRate}>
            -11.4{" "}
            <ArrowDownward className={`${styles.icon} ${styles.negative}`} />
          </span>
        </div>
        <span className={styles.sub}>Compared to last month</span>
      </div>
      <div className={styles.item}>
        <span className={styles.title}>Sales</span>
        <div className={styles.moneyContainer}>
          <span className={styles.money}>$4,415</span>
          <span className={styles.moneyRate}>
            -1.4{" "}
            <ArrowDownward className={`${styles.icon} ${styles.negative}`} />
          </span>
        </div>
        <span className={styles.sub}>Compared to last month</span>
      </div>
      <div className={styles.item}>
        <span className={styles.title}>Cost</span>
        <div className={styles.moneyContainer}>
          <span className={styles.money}>$2,225</span>
          <span className={styles.moneyRate}>
            +2.4 <ArrowUpward className={styles.icon} />
          </span>
        </div>
        <span className={styles.sub}>Compared to last month</span>
      </div>
    </div>
  );
}

export default FeaturedInfo;
