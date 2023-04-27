import React, { useRef, useState } from "react";
import classes from "./Hotels.module.css";
import axios from "axios";
const BOOKING_RAPID_API_KEY = import.meta.env.BOOKING_RAPID_API_KEY;

const Hotels = () => {
  const latRef = useRef();
  const longRef = useRef();
  const checkinRef = useRef();
  const checkoutRef = useRef();
  const numAdultsRef = useRef();
  const numRoomsRef = useRef();

  const [hotelList, setHotelList] = useState([]);

  const searchHotels = async (event) => {
    event.preventDefault();
    console.log(latRef.current.value);
    console.log(longRef.current.value);
    console.log(checkinRef.current.value);
    console.log(checkoutRef.current.value);
    console.log(numAdultsRef.current.value);
    console.log(numRoomsRef.current.value);

    const options = {
      method: "GET",
      url: "https://booking-com.p.rapidapi.com/v1/hotels/search-by-coordinates",
      params: {
        units: "metric",
        room_number: numRoomsRef.current.value,
        longitude: longRef.current.value,
        latitude: latRef.current.value,
        filter_by_currency: "USD",
        order_by: "popularity",
        locale: "en-us",
        checkout_date: checkoutRef.current.value,
        adults_number: numAdultsRef.current.value,
        checkin_date: checkinRef.current.value,
        include_adjacency: "true",
        page_number: "0",
        categories_filter_ids: "class::2,class::4,free_cancellation::1",
      },
      headers: {
        "content-type": "application/octet-stream",
        "X-RapidAPI-Key": BOOKING_RAPID_API_KEY,
        "X-RapidAPI-Host": "booking-com.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={classes["hotels-main"]}>
      <h1>Search for Hotels</h1>
      <form class="row g-3" onSubmit={searchHotels}>
        <div class="col-md-6">
          <label for="inputLat" class="form-label">
            Latitude
          </label>
          <input ref={latRef} type="text" class="form-control" id="inputLat" />
        </div>
        <div class="col-md-6">
          <label for="inputLong" class="form-label">
            Longitude
          </label>
          <input
            ref={longRef}
            type="text"
            class="form-control"
            id="inputLong"
          />
        </div>
        <div class="col-md-6">
          <label for="checkin_date" class="form-label">
            Check-in Date
          </label>
          <input
            ref={checkinRef}
            type="date"
            class="form-control"
            id="checkin_date"
          />
        </div>
        <div class="col-md-6">
          <label for="checkout_date" class="form-label">
            Check-out Date
          </label>
          <input
            ref={checkoutRef}
            type="date"
            class="form-control"
            id="checkout_date"
          />
        </div>
        <div class="col-md-6">
          <label for="adult_num" class="form-label">
            Number of Adults
          </label>
          <input
            ref={numAdultsRef}
            type="text"
            class="form-control"
            id="adult_num"
            placeholder="Enter the number of adults"
          />
        </div>
        <div class="col-md-6">
          <label for="room_num" class="form-label">
            Number of Room
          </label>
          <input
            ref={numRoomsRef}
            type="text"
            class="form-control"
            id="room_num"
            placeholder="Enter the number of rooms"
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
