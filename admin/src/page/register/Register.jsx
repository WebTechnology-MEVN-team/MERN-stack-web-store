import styles from "./register.module.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <div className={styles.inputField}>
          <label for="firstName">First name</label>
          <input
            type="text"
            placeholder="First name"
            id="firstName"
            name="firstName"
          />
        </div>
        <div className={styles.inputField}>
          <label for="lastName">Last name</label>
          <input
            type="text"
            placeholder="Last name"
            id="lastName"
            name="lastName"
          />
        </div>
        <div className={styles.inputField}>
          <label for="email">Email</label>
          <input
            type="email"
            placeholder="example@example.com"
            id="email"
            name="email"
          />
        </div>
        <div className={styles.inputField}>
          <label for="password">Password</label>
          <input
            type="password"
            placeholder="********"
            id="password"
            name="password"
          />
        </div>
        <div className={styles.action}>
          <Link to="/login">Login</Link>
          <button id="btn" className={styles.btn}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
