import { Link } from "react-router-dom";
import classes from "./ErrorPage.module.css";

const ErrorPage = () => {
  return (
    <div className={classes["main-body"]}>
      <div className={classes["bg-purple"]}>
        <div className={classes.stars}>
          <div className={classes["central-body"]}>
            <img
              className={classes["image-404"]}
              src="http://salehriaz.com/404Page/img/404.svg"
              width="300px"
            />
            <Link to="/" className={classes["btn-go-home"]}>
              GO BACK HOME
            </Link>
          </div>
          <div className={classes["objects"]}>
            <img
              className={classes["object_rocket"]}
              src="http://salehriaz.com/404Page/img/rocket.svg"
              width="40px"
            />
            <div className={classes["earth-moon"]}>
              <img
                className={classes["object_earth"]}
                src="http://salehriaz.com/404Page/img/earth.svg"
                width="100px"
              />
              <img
                className={classes["object_moon"]}
                src="http://salehriaz.com/404Page/img/moon.svg"
                width="80px"
              />
            </div>
            <div className={classes["box_astronaut"]}>
              <img
                className={classes["object_astronaut"]}
                src="http://salehriaz.com/404Page/img/astronaut.svg"
                width="140px"
              />
            </div>
          </div>
          <div className={classes["glowing_stars"]}>
            <div className={classes.star}></div>
            <div className={classes.star}></div>
            <div className={classes.star}></div>
            <div className={classes.star}></div>
            <div className={classes.star}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
