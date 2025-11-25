import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./pages/Registration.js";
import Login from "./pages/Login.js";
import Feed from "./pages/Feed.js";

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
