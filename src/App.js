import "./styles.css";
import Routes from "./Routes/Routes";
import NavBar from "./Components/NavBar";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes />
    </div>
  );
}