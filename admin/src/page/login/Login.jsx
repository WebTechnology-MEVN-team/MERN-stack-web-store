import styles from "./login.module.css";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { isLoggedIn, login } from "../../actions";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isLoggedIn());
    }
  }, []);

  const userLogin = (e) => {
    e.preventDefault();

    const user = {
      email,
      password,
    };
    dispatch(login(user));
  };

  if (auth.authenticate) {
    return <Navigate to={`/`} />;
  }

  return (
    <div className={styles.container}>
      <form onSubmit={userLogin} className={styles.form}>
        <div className={styles.inputField}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="example@example.com"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.inputField}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="********"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {/* <div className={styles.inputField}>
          <label htmlFor="remember">
            <input type="checkbox" name="" id="remember" />
            Remember me
          </label>
        </div> */}
        <div className={styles.action}>
          <Link to="/register">Register</Link>
          <button id="btn" className={styles.btn}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
