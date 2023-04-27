import React from "react";
import classes from "./Hotels.module.css";

const Hotels = () => {
  return (
    <div className={classes["hotels-main"]}>
      <h1>Search for Hotels</h1>
      <form class="row g-3">
        <div class="col-md-6">
          <label for="inputLat" class="form-label">
            Latitude
          </label>
          <input type="text" class="form-control" id="inputLat" />
        </div>
        <div class="col-md-6">
          <label for="inputLong" class="form-label">
            Longitude
          </label>
          <input type="text" class="form-control" id="inputLong" />
        </div>
        <div class="col-md-6">
          <label for="checkin_date" class="form-label">
            Check-in Date
          </label>
          <input type="date" class="form-control" id="checkin_date" />
        </div>
        <div class="col-md-6">
          <label for="checkout_date" class="form-label">
            Check-out Date
          </label>
          <input type="date" class="form-control" id="checkout_date" />
        </div>
        <div class="col-md-6">
          <label for="adult_num" class="form-label">
            Number of Adults
          </label>
          <input
            type="text"
            class="form-control"
            id="adult_num"
            placeholder="1"
          />
        </div>
        <div class="col-md-6">
          <label for="room_num" class="form-label">
            Number of Room
          </label>
          <input
            type="text"
            class="form-control"
            id="room_num"
            placeholder="1"
          />
        </div>

        <div class="col-12">
          <button type="submit" class="btn btn-primary">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Hotels;
