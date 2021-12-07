import styles from "./register.module.css";
import { Link, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Register() {
  const auth = useSelector((state) => state.auth);

  if (auth.authenticate) {
    return <Navigate to={`/`} />;
  }
  return (
    <div className="wrapper">
      <div className={styles.container}>
        <div className={styles.form}>
          <div className={styles.inputField}>
            <label htmlFor="firstName">First name</label>
            <input
              type="text"
              placeholder="First name"
              id="firstName"
              name="firstName"
            />
          </div>
          <div className={styles.inputField}>
            <label htmlFor="lastName">Last name</label>
            <input
              type="text"
              placeholder="Last name"
              id="lastName"
              name="lastName"
            />
          </div>
          <div className={styles.inputField}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="example@example.com"
              id="email"
              name="email"
            />
          </div>
          <div className={styles.inputField}>
            <label htmlFor="password">Password</label>
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
    </div>
  );
}

export default Register;
