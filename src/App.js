import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/Home.js";
import Header from "./utils/Header.js";
import Details from "./screens/Details.js";
import AddEmp from "./screens/AddEmp.js";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
          <Route path="/addemp" element={<AddEmp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
