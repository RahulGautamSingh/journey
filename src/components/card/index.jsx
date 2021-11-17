import { useState } from "react";
import "./card.css";
export default function Card(props) {
  let [popUp, setPopUp] = useState(false);
  console.log(props.courses);
  return (
    <div
      className="card"
      style={{
        width: `${(6 - Math.sqrt(props.courses)) * 10 + 150 + "px"}`,
        height: `${(6 - Math.sqrt(props.courses)) * 12.35 + 85 + "px"}`,
        backgroundImage: `url(${props.bgImg})`,
      }}
    >
      <div
        className="tags"
        onMouseEnter={(e) => {
          setPopUp(true);
        }}
        onMouseLeave={(e) => {
          setPopUp(false);
        }}
      >
        {props.tags.map((elem, index) => {
          return (
            <p className="tag" key={index}>
              {elem}
            </p>
          );
        })}
      </div>
      <div
        className="card-title"
        onMouseEnter={(e) => {
          setPopUp(true);
        }}
        onMouseLeave={(e) => {
          setPopUp(false);
        }}
        style={{
          paddingTop: Math.sqrt(props.courses) > 4 ? "5px" : "20px",
          fontSize: Math.sqrt(props.courses) > 4 ? "14px" : "17px",
        }}
      >
        <p>{props.title}</p>
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
        className="correct-img"
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
        <div
          className="popup-top"
          style={{ top: props.lastCard ? "130px" : "-120px" }}
        >
          <p style={{ fontWeight: "bold" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            molestiae explicabo.
          </p>

          <p>
            corporis, dolor saepe magni eveniet voluptas nostrum! Cum veniam
          </p>

          <img
            src="./caret-down.png"
            alt="down-arrow"
            style={{ top: props.lastCard ? "-24px" : "90px" }}
          />
        </div>
      )}
      {props.lastCard && (
        <img
          src="./flag.png"
          alt="finish"
          className="finishImg"
          style={{
            width: Math.sqrt(props.courses) >= 4 ? "100px" : "150px",
            height: Math.sqrt(props.courses) >= 4 ? "100px" : "150px",
            right: Math.sqrt(props.courses) >= 5 ? "-140px" : "-180px",
          }}
        />
      )}
    </div>
  );
}
