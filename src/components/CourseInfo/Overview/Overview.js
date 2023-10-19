import Grid from "@mui/material/Grid";
import "./Overview.css";

const Overview = () => {
  return (
    <div id="overview-tab">
      <Grid container justifyContent="center">
        <Grid item xs={9}>
          <div className="course-overview--heading">
            <div className="font-heading">About this course</div>
            <p>Learn to use Angular 2, 4, 5 and beyond!</p>
          </div>
          {/* Category sampple: i.e "By the numbers" */}
          <div className="course-overview--grid-row">
            <Grid container>
              <Grid item xs={3}>
                <div className="category-name">By the numbers</div>
              </Grid>
              <Grid item xs={7}>
                <div className="category-info">
                  <div>Skill level: All Levels</div>
                  <div>Student: 53045</div>
                  <div>Language: English</div>
                  <div>Captions: Yes</div>
                  <div>Lectures: 37</div>
                  <div>Video: 3.5 total hours</div>
                </div>
              </Grid>
            </Grid>
          </div>
          {/* End category sample */}

          <div className="course-overview--grid-row">
            <Grid container>
              <Grid item xs={3}>
                <div className="category-name">Description</div>
              </Grid>
              <Grid item xs={7}>
                <div className="category-info">
                  <p>
                    There are two main Angular versions 1 or AngularJs and 2.
                    This course is focused on versions after 2! This course is
                    for beginners who are curious on how to get started with
                    Angular. In this course you will learn how to download,
                    install and play around with Angular. We teach you the main
                    components of Angular, so that you can get up and running
                    with it asap. You will learn now to start building
                    applications with Angular.
                  </p>
                  <p className="what-learn">
                    <div className="bold-text">What you'll learn?</div>
                    <ul>
                      <li>You will learn the mayor fundamentals of Angular</li>
                      <li>
                        You will learn how to get up and running with Angular
                      </li>
                    </ul>
                  </p>
                  <p className="prerequisites">
                    <div className="bold-text">
                      Are there any course requirements or prerequisites?
                    </div>
                    <ul>
                      <li>HTML & CSS</li>
                      <li>Javascript</li>
                    </ul>
                  </p>
                  <p className="who-for">
                    <div className="bold-text">Who this course is for?</div>
                    <ul>
                      <li>
                        Students who want an introduction to Angular should take
                        this course
                      </li>
                    </ul>
                  </p>
                </div>
              </Grid>
            </Grid>
          </div>

          <div className="course-overview--grid-row">
            <Grid container>
              <Grid item xs={3}>
                <div className="category-name">Instructor</div>
              </Grid>
              <Grid item xs={7}>
                <div className="category-info">
                  <div>
                    <img
                      alt="User avatar"
                      className="user-avatar"
                      src="https://img-c.udemycdn.com/user/50x50/6772884_fcfc_2.jpg"
                    />
                    Mr. Edwin
                  </div>
                  <div>Some info about this instructor. </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Overview;
