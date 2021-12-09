// import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import WidgetLarge from "../../components/widgets/WidgetLarge";
import WidgetSmall from "../../components/widgets/WidgetSmall";
// import { userData } from "../../dummyData";
import styles from "./dashboard.module.css";

function Dashboard() {
  return (
    <div className={styles.home}>
      <FeaturedInfo />
      {/* <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      /> */}
      <div className={styles.widgets}>
        <WidgetSmall />
        <WidgetLarge />
      </div>
    </div>
  );
}

export default Dashboard;
