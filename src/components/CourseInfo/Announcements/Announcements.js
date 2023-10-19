import Grid from "@mui/material/Grid";
import FlagIcon from "@mui/icons-material/Flag";
import "./Announcements.css";

const Overview = () => {
  return (
    <div id="announcements-tab">
      <Grid container justifyContent="center">
        <Grid item xs={9}>
          {/* Start an announcement. */}
          <div className="announcement">
            <div className="announcement--header">
              <img
                alt="User avatar"
                className="user-avatar"
                src="https://img-c.udemycdn.com/user/50x50/6772884_fcfc_2.jpg"
              />
              <div className="announcement--header--info">
                <span className="announcement--instructor-name">
                  <a href="localhost/#" className="instructor-profile-link">
                    Edwin
                  </a>
                </span>
                <span className="announcement--time-info">
                  posted an announcement. <span>7 months ago.</span>
                  <span>
                    <FlagIcon />
                  </span>
                </span>
              </div>
            </div>
            <div className="announcement--body">
              <div className="announcement--body--title">
                Hi my Dear Students, how are you?
              </div>
              <div className="announcement--body--content">
                <p>
                  Hi my dear student how are you? It's been a while since I sent
                  you a message - for some its the first time you hear from me.
                </p>
                <p>
                  Life is like a rollercoaster, it goes up and down, enjoy the
                  ride.
                </p>
              </div>
            </div>
          </div>
          {/* End and announcement. */}
          {/* Start an announcement. */}
          <div className="announcement">
            <div className="announcement--header">
              <img
                alt="User avatar"
                className="user-avatar"
                src="https://img-c.udemycdn.com/user/50x50/6772884_fcfc_2.jpg"
              />
              <div className="announcement--header--info">
                <span className="announcement--instructor-name">
                  <a href="localhost/#" className="instructor-profile-link">
                    Edwin
                  </a>
                </span>
                <span className="announcement--time-info">
                  posted an announcement. <span>7 months ago.</span>
                  <span>
                    <FlagIcon />
                  </span>
                </span>
              </div>
            </div>
            <div className="announcement--body">
              <div className="announcement--body--title">
                Hi my Dear Students, how are you?
              </div>
              <div className="announcement--body--content">
                <p>
                  Hi my dear student how are you? It's been a while since I sent
                  you a message - for some its the first time you hear from me.
                </p>
                <p>
                  Life is like a rollercoaster, it goes up and down, enjoy the
                  ride.
                </p>
              </div>
            </div>
          </div>
          {/* End and announcement. */}
        </Grid>
      </Grid>
    </div>
  );
};

export default Overview;
