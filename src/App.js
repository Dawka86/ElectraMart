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
import IconGrid from "./components/IconGrid";
import Cart from "./components/Cart";
import CartButton from "./components/CartButton";

export default function App() {
  return (
    <Router>
      <div className="App">
        <HeaderWrapper />
        <CartButton />
        <Routes>
          <Route exact path="/" element={<Jumbotron />} />
          <Route path="/sign" element={<Sign />} />
        </Routes>
        <CartWrapper />
        <IconGritWrapper />
        <Footer />
      </div>
    </Router>
  );
  function HeaderWrapper() {
    const location = useLocation();
    console.log(location.pathname);
    return location.pathname !== "/Sign" ? <Header /> : null;
  }
  function IconGritWrapper() {
    const location = useLocation();
    console.log(location.pathname);
    return location.pathname !== "/Sign" ? <IconGrid /> : null;
  }
  function CartWrapper() {
    const location = useLocation();
    console.log(location.pathname);
    return location.pathname !== "/Sign" ? <Cart /> : null;
  }
}
