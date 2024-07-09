import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import "./styles.css";
import Jumbotron from "./components/Jumbotron";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Jumbotron />
    </div>
  );
}
