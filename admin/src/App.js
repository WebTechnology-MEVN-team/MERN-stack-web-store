import { Routes, Route } from "react-router-dom";
import PrivateOutlet from "./components/privateOutlet/PrivateOutlet";
import Home from "./page/home/Home";
import Login from "./page/login/Login";
import Register from "./page/register/Register";

function App() {
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
