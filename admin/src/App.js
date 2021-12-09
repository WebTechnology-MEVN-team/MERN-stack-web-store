import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { isLoggedIn } from "./actions";
import PrivateOutlet from "./components/privateOutlet/PrivateOutlet";
import Home from "./page/Home/Home";
import Login from "./page/Login/Login";
import Register from "./page/Register/Register";

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    const checkLogin = () => {
      if (!auth.authenticate) {
        dispatch(isLoggedIn());
      }
    }

    checkLogin();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PrivateOutlet />}>
          <Route path="" element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
