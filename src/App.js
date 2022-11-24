import "./App.css";
import BodyList from "./components/BodyTypes/BodyList";
import NavBar from "./components/NavBar/NavBar";
import Button from "./components/Button/Button"
function App() {
  return (
    <div className="App">
      <NavBar title="Body Types" />

      <div className="container">
        <BodyList />
          
      </div>
        <div className="button-app">
        <Button text={"Next"} onClick={() => {console.log("Clicked")}}/>
    
        </div>
    </div>
  );
}

export default App;
