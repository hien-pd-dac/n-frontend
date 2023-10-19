import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

import "./QuestionDetail.css";

const QuestionDetail = (props) => {
  return (
    <div id="question-detail">
      <button className="back-btn">Back to All Quetions</button>
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
              <div className="question-content--header">
                <div className="question-content-header-title">Job related</div>
                <div className="question-content-header-reaction">
                  <div className="queston-reaction--upvote">
                    <span className="upvote-count">2</span>
                    <span className="upvote-icon">
                      <ArrowCircleUpIcon />
                    </span>
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
              <div className="question-content--body">
                <p>
                  Hi, I am working with MERN stack for 2 years. I got response
                  but didn't got any offter. Everytime I was rejected for my
                  time zone GMT +6 or something I don't know...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="quetion-reply-wrapper">
        <div className="question-reply-wrapper--header">
          <div className="question-reply-wrapper--header-reply-count">
            1 Reply
          </div>
          <div className="question-reply-wrapper--header-reply-follow">
            Follow replies
          </div>
        </div>
        <div className="reply-wrapper--body">
          <div className="reply-unit-wrapper">
            <div className="avatar">
              <img
                alt="User avatar"
                className="user-avatar"
                src="https://img-c.udemycdn.com/user/50x50/6772884_fcfc_2.jpg"
              />
            </div>
            <div className="reply-content">
              <div className="reply-content--main">
                <div className="reply-content--text">
                  <div className="reply-content--header">
                    <div className="reply-content-header-title">
                      <a href="/user/1">Username</a>
                    </div>
                    <div className="reply-content-header-reaction">
                      <div className="reply-reaction--upvote">
                        <span className="upvote-count">2</span>
                        <span className="upvote-icon">
                          <ArrowCircleUpIcon />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="reply-content--other-info">
                    <span>1 year ago</span>
                  </div>
                  <div className="reply-content--body">
                    <p>
                      Hi, I am working with MERN stack for 2 years. I got
                      response but didn't got any offter. Everytime I was
                      rejected for my time zone GMT +6 or something I don't
                      know...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="reply-box-input-wrapper">
            <div className="reply-box-input-wrapper--ava">
              <img
                alt="User avatar"
                className="user-avatar"
                src="https://img-c.udemycdn.com/user/50x50/6772884_fcfc_2.jpg"
              />
            </div>
            <div className="reply-box-input-wrapper--input">
              <input placeholder="Add reply" type="text" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionDetail;
