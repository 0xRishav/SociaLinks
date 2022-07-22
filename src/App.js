import "./App.css";
import Homepage from "./Pages/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Pages/Signup";

function App() {
  return (
    <div className="w-10/12 mx-auto">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
