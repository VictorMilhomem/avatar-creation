import "./App.css";
import BodyList from "./components/BodyTypes/BodyList";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar title="Body Types" />

      <div className="container">
        <BodyList />
      </div>
    </div>
  );
}

export default App;
