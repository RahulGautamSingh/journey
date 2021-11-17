import "./App.css";
import Path from "./components/path";
import Navbar from "./components/navbar";
// import Searchbar from "./components/searchbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Searchbar /> */}
      <Path />
    </div>
  );
}

export default App;
