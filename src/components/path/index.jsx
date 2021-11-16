import Card from "../card";
import "./path.css";
export default function Path() {
  return (
    <div className="path">
      <img src="./flag-pole.png" alt="start" className="start"/>
      <div className="card1">
        <Card state={100} />
      </div>
     
      <div className="card2">
        <Card state={100} />
      </div>
      <img src="love.png" alt="card-stack" className="card-stack"/>
    
      <div className="card3">
        <Card state={70} />
      </div>
         
      <div className="card4">
        <Card state={0} />
      </div>
      <img src="./new-year.png" alt="end"  className="end"/>
    </div>
  );
}
