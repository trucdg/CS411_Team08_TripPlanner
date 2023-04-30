import React from "react";
import { useNavigate, Link } from "react-router-dom";
import classes from "./Welcome.module.css";
import TypeIt from "typeit-react";

const WelcomePage = ({ token }) => {
  let navigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className={classes["welcome-content-box"]}>
      <div className={classes["welcome-content"]}>
        <TypeIt
          style={{ fontSize: "3em" }}
          options={{ speed: 100 }}
          getBeforeInit={(instance) => {
            instance
              .type("Hello world,")
              .pause(750)
              .delete(6)
              .pause(500)
              .type("there!");

            return instance;
          }}
        />
        {token ? (
          <>
            <h2>
              Welcome back, <br />
              {token.user.email}
            </h2>
            <button className={classes.actionBtn} onClick={handleLogout}>
              <span>Logout!</span>
            </button>
          </>
        ) : (
          <button className={classes.actionBtn}>
            <span>
              <Link to="/login" style={{ color: "white" }}>
                Please log in!
              </Link>
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

/* <!-- HTML !-->
<button class="button-64" role="button"><span class="text">Button 64</span></button> */

export default WelcomePage;
