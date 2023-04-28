import React, { useRef, useState } from "react";
import classes from "./Hotels.module.css";
import axios from "axios";
import HotelAPI from "../../APIs/HotelAPI";
import parse from "html-react-parser";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";

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

    // const options = {
    //   method: "GET",
    //   url: "https://booking-com.p.rapidapi.com/v1/hotels/search-by-coordinates",
    //   params: {
    //     units: "metric",
    //     room_number: numRoomsRef.current.value,
    //     longitude: longRef.current.value,
    //     latitude: latRef.current.value,
    //     filter_by_currency: "USD",
    //     order_by: "popularity",
    //     locale: "en-us",
    //     checkout_date: checkoutRef.current.value,
    //     adults_number: numAdultsRef.current.value,
    //     checkin_date: checkinRef.current.value,
    //     children_ages: "0",
    //     include_adjacency: "true",
    //     page_number: "0",
    //     categories_filter_ids: "class::2,class::4,free_cancellation::1",
    //   },
    //   headers: {
    //     "content-type": "application/octet-stream",
    //     "X-RapidAPI-Key": "aab7ce40c6msh66155138dcaa8bbp1e4aa1jsnee55674fb612",
    //     "X-RapidAPI-Host": "booking-com.p.rapidapi.com",
    //   },
    // };

    try {
      const lat = latRef.current.value;
      const long = longRef.current.value;
      const checkin = checkinRef.current.value;
      const checkout = checkoutRef.current.value;
      const numAdults = numAdultsRef.current.value;
      const numRooms = numRoomsRef.current.value;
      const response = await HotelAPI.fetchHotelData({
        lat,
        long,
        checkin,
        checkout,
        numAdults,
        numRooms,
      });

      const data = await response;
      console.log(data);

      setHotelList(data.result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={classes["hotels-main"]}>
      <h1>Search for Hotels</h1>
      <form className="row g-3" onSubmit={searchHotels}>
        <div className="col-md-6">
          <label for="inputLat" className="form-label">
            Latitude
          </label>
          <input
            ref={latRef}
            type="text"
            className="form-control"
            id="inputLat"
          />
        </div>
        <div className="col-md-6">
          <label for="inputLong" className="form-label">
            Longitude
          </label>
          <input
            ref={longRef}
            type="text"
            className="form-control"
            id="inputLong"
          />
        </div>
        <div className="col-md-6">
          <label for="checkin_date" className="form-label">
            Check-in Date
          </label>
          <input
            ref={checkinRef}
            type="date"
            className="form-control"
            id="checkin_date"
          />
        </div>
        <div className="col-md-6">
          <label for="checkout_date" className="form-label">
            Check-out Date
          </label>
          <input
            ref={checkoutRef}
            type="date"
            className="form-control"
            id="checkout_date"
          />
        </div>
        <div className="col-md-6">
          <label for="adult_num" className="form-label">
            Number of Adults
          </label>
          <input
            ref={numAdultsRef}
            type="text"
            className="form-control"
            id="adult_num"
            placeholder="Enter the number of adults"
          />
        </div>
        <div className="col-md-6">
          <label for="room_num" className="form-label">
            Number of Room
          </label>
          <input
            ref={numRoomsRef}
            type="text"
            className="form-control"
            id="room_num"
            placeholder="Enter the number of rooms"
          />
        </div>

        <div className="col-12">
          <button
            type="submit"
            className={classes.searchBtn + " btn btn-primary"}
          >
            Search
          </button>
        </div>
      </form>
      {hotelList.length > 0 && (
        <div>
          <Row xs={1} md={2} className="g-4">
            {hotelList.map((hotel, idx) => (
              <Col>
                <Card style={{ width: "28rem", color: "black" }}>
                  <Card.Img variant="top" src={hotel["max_photo_url"]} />
                  <Card.Body>
                    <Card.Title>{hotel["hotel_name"]}</Card.Title>
                    {parse(hotel["unit_configuration_label"])}
                    <Card.Text>
                      {hotel.address + " " + hotel.city + " " + hotel.zip}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      )}
    </div>
  );
};

export default Hotels;
