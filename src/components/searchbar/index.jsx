import "./searchbar.css";
export default function Searchbar() {
  return (
    <div className="searchbar">
      <div className="left-side">
        <p>Select your journey</p>
        <select name="journey-list" id="journey-list">
          <option value="opt1">{"Customer excellence thinking"}</option>
          <option value="opt2">Saab </option>
          <option value="opt3">Mercedes</option>
          <option value="opt3">Audi</option>
        </select>
        <img src="./down-arrow.png" alt="arrow-down" className="down-arrow" />
      </div>
      <div className="right-side">
        <button style={{backgroundColor:"black",color:"white"}}>Detailed Journey</button>
        <button style={{backgroundColor:"white"}}>Show All(12)</button>
      </div>
    </div>
  );
}
