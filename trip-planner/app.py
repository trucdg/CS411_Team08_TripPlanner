import requests
import os
from flask import Flask, request
from flask_cors import CORS
from dotenv import load_dotenv
load_dotenv()

app = Flask(__name__)
CORS(app)

def get_weather_results(lat, long):
    """"return the data from the api call as json """
    api_url = f"https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={long}&units=metric&appid={os.getenv('WEATHER_API_KEY')}"
    print(api_url)
    response = requests.get(api_url)
    print( response.json())
    return response.json()

@app.route('/')
def weather_dashboard():
    return "Hello"


@app.route('/weatherresults', methods=["POST"], strict_slashes=False)
def render_results():
    lat = request.json['enteredLat']
    long = request.json['enteredLong']
    print(lat,long)
    data = get_weather_results(lat, long) #json object

    return data


if __name__=='__main__':
    app.run()
