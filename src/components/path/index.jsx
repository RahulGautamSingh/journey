import { useEffect, useState } from "react";
import Card from "../card";
import "./path.css";
export default function Path() {
  let [courses, setCourses] = useState([]);
  let [columns, setColumns] = useState("");
  const courseData = [
    {
      bgImg: "./ng.jpg",
      title: "Course 1",
      description: "",
      tags: ["Tag1", "Tag2"],
      completePercentage: 0,
      display: true,
    },
    {
      bgImg: "./ng.jpg",
      title: "Course 2",
      description: "",
      tags: ["Tag1", "Tag2"],
      completePercentage: 0,
      display: true,
    },
    {
      bgImg: "./ng.jpg",
      title: "Course 3",
      description: "",
      tags: ["Tag1", "Tag2"],
      completePercentage: 0,
      display: true,
    },
    {
      bgImg: "./ng.jpg",
      title: "Course 4",
      description: "",
      tags: ["Tag1", "Tag2"],
      completePercentage: 100,
      display: true,
    },
    {
      bgImg: "./ng.jpg",
      title: "Course 5",
      description: "",
      tags: ["Tag1", "Tag2"],
      completePercentage: 0,
      display: true,
    },
    {
      bgImg: "./ng.jpg",
      title: "Course 6",
      description: "",
      tags: ["Tag1", "Tag2"],
      completePercentage: 0,
      display: true,
    },
  ];

  useEffect(() => {
    // add function here to fetch course from API
    changeCourses(6);
    // eslint-disable-next-line 
  }, []);

  function changeCourses(num) {
    let arr = new Array(num * num).fill(0);
    let str = new Array(num).fill("auto").join(" ");
    let cardHere = num - 1;
    let courseIndex = num - 1;
    arr = arr.map((elem, index) => {
      if (arr.length === 1) return courseData[0];
      else {
        if (index !== arr.length - 1 && index === cardHere) {
          cardHere += num - 1;
          return courseData[courseIndex--];
        } else return { display: false };
      }
    });

    setColumns(str);
    setCourses(arr);
  }

  return (
    <div className="path">
      <div
        className="grid-container"
        style={{ gridTemplateColumns: `${columns}` }}
      >
        {courses.map((course, index) => {
          return course.display ? (
            <div
              className="grid-item"
              style={{
                justifySelf: Math.sqrt(courses.length) < 4 ? "center" : "left",
                alignSelf: Math.sqrt(courses.length) < 4 ? "center" : "top",
              }}
            >
              <Card
                state={course.completePercentage}
                index={index}
                courses={courses.length}
                title={"Course" + index + 1}
                tags={["Tage1", "Tag2"]}
                lastCard={index === Math.sqrt(courses.length) - 1}
                bgImg={course.bgImg}
              />
            </div>
          ) : (
            <div className="grid-item hidden"></div>
          );
        })}
      </div>
    </div>
  );
}
