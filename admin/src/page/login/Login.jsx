import styles from "./login.module.css";
import { login } from "../../actions";
import { useDispatch } from "react-redux";

function Login() {
  const dispatch = useDispatch();

  const userLogin = (e) => {
    e.preventDefault();

    const user = {
      email: "check@gmail.com",
      password: "123",
    };
    dispatch(login(user));
  };

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
        <div className={styles.inputField}>
          <label htmlFor="remember">
            <input type="checkbox" name="" id="remember" />
            Remember me
          </label>
        </div>
        <div className={styles.action}>
          <p>Register</p>
          <button id="btn" className={styles.btn}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
