import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles.css";

import Sign from "./components/Sign/Sign";
import Main from "./components/Home/Main";
import Footer from "./components/Home/Footer";
import ProductsPage from "./components/ProductPage/productsPage";
export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/sign" element={<Sign />} />
          <Route path="/product" element={<ProductsPage />} />
        </Routes>{" "}
        <Footer />
      </div>{" "}
    </Router>
  );
}
