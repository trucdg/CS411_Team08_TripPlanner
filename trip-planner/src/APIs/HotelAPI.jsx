export default class HotelAPI {
  static fetchHotelData(reqBody) {
    return fetch(`http://127.0.0.1:5000/hotelresults`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reqBody),
    })
      .then((response) => response.json())
      .catch((error) => console.log(error));
  }
}
