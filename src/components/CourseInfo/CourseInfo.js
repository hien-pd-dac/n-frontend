import { useState } from "react";
import { Overview } from "./Overview";
import { Announcements } from "./Announcements";
import { QvA } from "./QvA";
import "./CourseInfo.css";

const CourseInfo = () => {
  const [childPage, setChildPage] = useState("overviews");

  let childComponent = <Overview />;
  switch (childPage) {
    case "overviews":
      childComponent = <Overview />;
      window.location.href = "http://192.168.56.5:3000/learn#overviews";
      break;
    case "questions":
      childComponent = <QvA />;
      window.location.href = "http://192.168.56.5:3000/learn#questions";
      break;
    case "announcements":
      childComponent = <Announcements />;
      window.location.href = "http://192.168.56.5:3000/learn#announcements";
      break;
    default:
      childComponent = <Overview />;
      window.location.href = "http://192.168.56.5:3000/learn#overviews";
  }

  return (
    <div id="course-info">
      <div className="course-info-header-bar">
        <a
          href="http://192.168.56.5:3000/learn#overviews"
          className={
            childPage === "overviews"
              ? "course-info-header-item tab-selected"
              : "course-info-header-item"
          }
          onClick={() => setChildPage("overviews")}
        >
          Overview
        </a>
        <a
          href="http://192.168.56.5:3000/learn#questions"
          className={
            childPage === "questions"
              ? "course-info-header-item tab-selected"
              : "course-info-header-item"
          }
          onClick={() => setChildPage("questions")}
        >
          Q&A
        </a>
        <a
          href="http://192.168.56.5:3000/learn#announcements"
          className={
            childPage === "announcements"
              ? "course-info-header-item tab-selected"
              : "course-info-header-item"
          }
          onClick={() => setChildPage("announcements")}
        >
          Announcements
        </a>
      </div>
      <div className="course-info-body-wrapper">{childComponent}</div>
    </div>
  );
};

export default CourseInfo;
