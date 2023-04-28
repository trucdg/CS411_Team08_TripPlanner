import requests
import os
from flask import Flask, request
from flask_cors import CORS
from dotenv import load_dotenv
load_dotenv()

app = Flask(__name__)
CORS(app)

@app.route('/')
def weather_dashboard():
    return "Server is running"

# WEATHER API
def get_weather_results(lat, long):
    """"return the data from the api call as json """
    api_url = f"https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={long}&units=metric&appid={os.getenv('WEATHER_API_KEY')}"
    print(api_url)
    response = requests.get(api_url)
    print( response.json())
    return response.json()

@app.route('/weatherresults', methods=["POST"], strict_slashes=False)
def render_weather_results():
    lat = request.json['enteredLat']
    long = request.json['enteredLong']
    print(lat,long)
    data = get_weather_results(lat, long) #json object
    return data

# HOTEL API
def get_hotel_results(lat, long, checkin,checkout,numAdults,numRooms):
    """"return the data from the api call as json """
    api_url = "https://booking-com.p.rapidapi.com/v1/hotels/search-by-coordinates"

    querystring = {"units":"metric",
                   "room_number": numRooms,
                   "longitude": long ,
                   "latitude": lat,
                   "filter_by_currency":"USD",
                   "order_by":"popularity",
                   "locale":"en-us",
                   "checkout_date": checkout,
                   "adults_number": numAdults,
                   "checkin_date": checkin,
                   "include_adjacency":"true",
                   "page_number":"0",
                   "categories_filter_ids":"class::2,class::4,free_cancellation::1"}
    
    headers = {
	"content-type": "application/octet-stream",
	"X-RapidAPI-Key": os.getenv('BOOKING_RAPID_API_KEY'),
	"X-RapidAPI-Host": "booking-com.p.rapidapi.com"
    }

    response = requests.get(api_url, headers=headers, params=querystring)
    print(response.json())
    return response.json()

@app.route('/hotelresults', methods=["POST"], strict_slashes=False)
def render_hotel_results():
    lat = request.json['lat']
    long = request.json['long']
    checkin = request.json['checkin']
    checkout = request.json['checkout']
    numAdults = request.json['numAdults']
    numRooms = request.json['numRooms']

    print(lat,long,checkin,checkout,numAdults,numRooms)
    data = get_hotel_results(lat, long, checkin,checkout,numAdults,numRooms) #json object
    print(data)
    return data

if __name__=='__main__':
    app.run()
