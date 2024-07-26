import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles.css";

import Sign from "./components/sign/Sign";
import Main from "./components/home/Main";
import Footer from "./components/home/Footer";
export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/sign" element={<Sign />} />
        </Routes>{" "}
        <Footer />
      </div>{" "}
    </Router>
  );
}
