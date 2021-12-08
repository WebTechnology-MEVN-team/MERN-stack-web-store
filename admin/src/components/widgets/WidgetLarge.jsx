import styles from "./WidgetLarge.module.css";

function WidgetLarge() {
  const Button = ({ type }) => {
    return (
      <button className={`${styles.largeButton}  styles.${type}`}>
        {type}
      </button>
    );
  };
  return (
    <div className={styles.widgetLarge}>
      <h3 className={styles.largeTitle}>Latest transactions</h3>
      <table className={styles.largeTable}>
        <tbody>
          <tr className={styles.largeTr}>
            <th className={styles.largeTh}>Customer</th>
            <th className={styles.largeTh}>Date</th>
            <th className={styles.largeTh}>Amount</th>
            <th className={styles.largeTh}>Status</th>
          </tr>
          <tr className={styles.largeTr}>
            <td className={styles.largeUser}>
              <img
                src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
                className={styles.largeImg}
              />
              <span className={styles.largeName}>Susan Carol</span>
            </td>
            <td className={styles.largeDate}>2 Jun 2021</td>
            <td className={styles.largeAmount}>$122.00</td>
            <td className={styles.largeStatus}>
              <Button type="Approved" />
            </td>
          </tr>
          <tr className={styles.largeTr}>
            <td className={styles.largeUser}>
              <img
                src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
                className={styles.largeImg}
              />
              <span className={styles.largeName}>Susan Carol</span>
            </td>
            <td className={styles.largeDate}>2 Jun 2021</td>
            <td className={styles.largeAmount}>$122.00</td>
            <td className={styles.largeStatus}>
              <Button type="Declined" />
            </td>
          </tr>
          <tr className={styles.largeTr}>
            <td className={styles.largeUser}>
              <img
                src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
                className={styles.largeImg}
              />
              <span className={styles.largeName}>Susan Carol</span>
            </td>
            <td className={styles.largeDate}>2 Jun 2021</td>
            <td className={styles.largeAmount}>$122.00</td>
            <td className={styles.largeStatus}>
              <Button type="Pending" />
            </td>
          </tr>
          <tr className={styles.largeTr}>
            <td className={styles.largeUser}>
              <img
                src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
                className={styles.largeImg}
              />
              <span className={styles.largeName}>Susan Carol</span>
            </td>
            <td className={styles.largeDate}>2 Jun 2021</td>
            <td className={styles.largeAmount}>$122.00</td>
            <td className={styles.largeStatus}>
              <Button type="Approved" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default WidgetLarge;
