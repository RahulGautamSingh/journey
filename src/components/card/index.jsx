import { useState } from "react";
import "./card.css";
export default function Card(props) {
  let [popUp, setPopUp] = useState(false);
  return (
    <div
      className="card"
      onMouseEnter={(e) => {
        setPopUp(true);
      }}
      onMouseLeave={(e) => {
        setPopUp(false);
      }}
    >
      <div className="tags">
        <p className="tag">Tag1</p>
        <p className="tag">Tag2</p>
      </div>
      <div className="card-title">
        <p>Random Course Title</p>
      </div>
      {props.state < 100 && props.state > 0 && (
        <div className="bottom">
          <p>Continue Learning</p>
          <div className="outer">
            <div className="inner" style={{ width: `${props.state}%` }}></div>
          </div>
        </div>
      )}
      {props.state === 0 && (
        <div className="bottom">
          <button>Start</button>
        </div>
      )}

      <img
        src={
          props.state === 100
            ? "./correct.png"
            : props.state === 0
            ? "./correct-disabled.png"
            : "./ongoing.png"
        }
        alt="tick"
      />
      {popUp && (
        <div className="popup">
          <p style={{ fontWeight: "bold" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            molestiae explicabo.
          </p>

          <p>
            corporis, dolor saepe magni eveniet voluptas nostrum! Cum veniam
          </p>
          <img src="./caret-down.png" alt="down-arrow"/>
        </div>
      )}
    </div>
  );
}
