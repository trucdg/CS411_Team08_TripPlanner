import { Link } from "react-router-dom";

function MainNavigation() {
  return (
    <>
      <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <Link to="/" className="navbar-brand">
            TripPlanner
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/weather">
                  Weather
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/flight">
                  Flight
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/feed">
                  TravelFeed
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default MainNavigation;
