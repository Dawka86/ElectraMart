import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./styles.css";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";
import Sign from "./components/Sign";

export default function App() {
  return (
    <Router>
      <div className="App">
        <HeaderWrapper />
        <Routes>
          <Route exact path="/" element={<Jumbotron />} />
          <Route path="/sign" element={<Sign />} />
          {/* Możesz dodać więcej tras tutaj */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
  function HeaderWrapper() {
    const location = useLocation();
    console.log(location.pathname);
    return location.pathname !== "/Sign" ? <Header /> : null;
  }
}
