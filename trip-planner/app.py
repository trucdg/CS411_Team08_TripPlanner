import json
import requests
from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
import spotipy
from spotipy.oauth2 import SpotifyClientCredentials
import os

# ENVIRONMENT
from dotenv import load_dotenv
load_dotenv()

API_KEY = os.getenv("OPEN_WEATHER")

# CORS
app = Flask(__name__)
cors = CORS(app)


"""
lat = 42.3601
lon = -71.0589

api_url = f'https://api.weather.gov/points/{lat},{lon}'
response=requests.get(api_url)
data=response.json()


forecasturl = data['properties']['forecast']
forecast_response = requests.get(forecasturl)
forecast_data = forecast_response.json()
print(forecast_data['properties']['periods'][0].keys())
"""

app = Flask(__name__)

@app.route("/search", methods=["GET"])
def weathersearch():

    # lat = request.args.get('lat')
    # long = request.args.get('long')
    lat = 42.3601
    long = 71.0589
    
    api_url = f'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={long}&units=metric&apiKey={API_KEY}'
    response=requests.get(api_url)
    data=response.json()

    sea_level = data["main"]["sea_level"]
    return jsonify(sea_level)



def search_3playlist(name):
    # Set up a Spotipy client with your Spotify API credentials
    client_credentials_manager = SpotifyClientCredentials(client_id='a09b88e0398a4dc9aec50263de3d464b',                                                client_secret='f1146f97edfe4466842607d87304300a')
    sp = spotipy.Spotify(client_credentials_manager=client_credentials_manager)

    # Search for the artist using the provided artist name
    results = sp.search(q='playlist:' + name, limit=5, type='playlist')
    # print(results)
    
    if results['playlists']['total'] == 0:
        return "No Playlist Found"
    holder = {}
    counter=0
    playlists = results['playlists']['items']
    for playlist in playlists:
        listholder=[]
        listholder += [playlist['external_urls']['spotify']]
        listholder += [playlist['name']]
        listholder += [playlist['images'][0]['url']]
        holder['playlist'+str(counter)] = listholder
        counter+=1
    #print(holder)
    return jsonify(holder)
    """
    # Extract the first artist from the search results
    if results['artists']['items']:
        artist = results['artists']['items'][0]
        return artist['name']
    else:
        return None
    """



#print(search_artist("Taylor Swift"))
#print(search_3playlist("Boston"))










"""

AVIATSTACK_API_URL = "https://api.aviatstack.com/v1/flights"

# Aviatstack API key
params = {
  'access_key': '00d2d812818f9735ae265f61eb1c8bd9'
} 

p1 = 'BOS'
p2 = "MSP"

# Flask route to get flight prices for a specific route
#@app.route('/flight_prices/<string:origin>/<string:destination>/<string:outbound_date>')
def get_flight_prices(origin, destination):
   # url = f"https://api.aviationstack.com/v1/flights?access_key=00d2d812818f9735ae265f61eb1c8bd9?dep_iata={origin}&arr_iata={destination}"
    response = requests.get(f"http://api.aviationstack.com/v1/flights?access_key=00d2d812818f9735ae265f61eb1c8bd9?dep_iata={origin}&arr_iata={destination}")
    print(response)
    prices = response.json()["data"]["flight_data"]["price"]
    return jsonify({"origin": origin, "destination": destination, "price": prices})

print(get_flight_prices(p1,p2))

#print(data)
#print(current_conditions)
#print("TemperatureL", current_conditions['temperature'])
"""

# MAIN ROUTER #
@app.route("/", methods=["GET"])
def slash(): return "Server is running..."

if __name__ == "__main__":
    app.run(port=5000, debug=True)
