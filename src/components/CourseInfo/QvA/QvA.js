import { useState } from "react";
import "./QvA.css";
import SearchIcon from "@mui/icons-material/Search";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ForumIcon from "@mui/icons-material/Forum";

import { QuestionDetail } from "./QuestDetail";

const QvA = () => {
  const [lessonFilter, setLessonFilter] = useState("");

  const handleChangeLessonFilter = (event) => {
    setLessonFilter(event.target.value);
  };

  const [sortFilter, setSortFilter] = useState("");

  const handleChangeSortFilter = (event) => {
    setSortFilter(event.target.value);
  };
  {
    /* TODO: orgnize questionIndex as a child Component of QvA */
  }

  const [childPage, setChildPage] = useState("questionIndex");

  const questionIndex = (
    <div id="QvAs-tab">
      <div className="search-bar">
        <input
          className="search-bar--input"
          placeholder="Search all course questions"
          type="text"
        />
        <button className="search-bar--button">
          <SearchIcon />
        </button>
      </div>
      <div className="filter-bar">
        <div className="filter-bar--lesson">
          <FormControl sx={{ m: 1, minWidth: 150 }}>
            <InputLabel id="filter-lesson-label">Lesson</InputLabel>
            <Select
              labelId="filter-lesson-label"
              id="filter-lesson"
              value={lessonFilter}
              onChange={handleChangeLessonFilter}
            >
              <MenuItem value={0}>All lessons</MenuItem>
              <MenuItem value={1}>Current lesson</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="filter-bar--sort">
          <FormControl sx={{ m: 1, minWidth: 150 }}>
            <InputLabel id="filter-sort-label">Sort by</InputLabel>
            <Select
              labelId="filter-sort-label"
              id="filter-sort"
              value={sortFilter}
              onChange={handleChangeSortFilter}
            >
              <MenuItem value={0}>Sort by most recent</MenuItem>
              <MenuItem value={1}>Sort by most upvoted</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      {/* Questions list */}
      <div className="questions">
        <div className="number-of-questions">
          All questions in this course (1)
        </div>
        <div className="question-item-wrapper">
          <div className="avatar">
            <img
              alt="User avatar"
              className="user-avatar"
              src="https://img-c.udemycdn.com/user/50x50/6772884_fcfc_2.jpg"
            />
          </div>
          <div className="question-content">
            <div className="question-content--main">
              <div className="question-content--text">
                <div className="question-content--title">Job related</div>
                <div className="question-content--body">
                  <p>
                    Hi, I am working with MERN stack for 2 years. I got response
                    but didn't got any offter. Everytime I was rejected for my
                    time zone GMT +6 or something I don't know...
                  </p>
                </div>
              </div>
              <div className="question-content--reaction">
                <div className="queston-reaction--upvote">
                  <span className="upvote-count">2</span>
                  <span className="upvote-icon">
                    <ArrowCircleUpIcon />
                  </span>
                </div>
                <div className="queston-reaction--comment">
                  <span className="comment-count">2</span>
                  <a
                    href="http://192.168.56.5:3000/learn#questions/1"
                    className="comment-icon"
                    onClick={() => setChildPage("questionDetail")}
                  >
                    <ForumIcon />
                  </a>
                </div>
              </div>
            </div>
            <div className="question-content--other-info">
              <a href="/user/1">Username</a>
              <span> · </span>
              <a href="/lecture/1">Lecture 1</a>
              <span> · </span>
              <span>1 year ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  let childComponent = questionIndex;
  const rerenderFunc = (val) => {
    setChildPage(val);
  };
  switch (childPage) {
    case "questionIndex":
      childComponent = questionIndex;
      window.location.href = "http://192.168.56.5:3000/learn#questions";
      break;
    case "questionDetail":
      childComponent = <QuestionDetail rerender={rerenderFunc} />;
      window.location.href = "http://192.168.56.5:3000/learn#questions/1";
      break;
    default:
      childComponent = questionIndex;
      window.location.href = "http://192.168.56.5:3000/learn#questions";
  }
  return childComponent;
};

export default QvA;
