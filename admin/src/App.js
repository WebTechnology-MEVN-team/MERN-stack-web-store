import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { getInitialData, isLoggedIn } from "./actions";
import PrivateOutlet from "./components/privateOutlet/PrivateOutlet";
import Home from "./page/home/Home";
import Login from "./page/login/Login";
import Register from "./page/register/Register";

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isLoggedIn());
    }
    if (auth.authenticate) {
      dispatch(getInitialData());
    }
  }, [auth.authenticate]);

  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<PrivateOutlet />}>
          <Route path="*" element={<Home />} />
        </Route>

        <Route path="/login" element={<Login />} />
        {/* <Route path="/register" element={<Register />} /> */}
      </Routes>
    </div>
  );
}

export default App;
