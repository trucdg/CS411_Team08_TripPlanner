import requests
from flask import Flask, jsonify, request
import spotipy
from spotipy.oauth2 import SpotifyClientCredentials


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

def weathersearch():

    lat = request.args.get('lat')
    long = request.args.get('long')
    
    api_url = f'https://api.weather.gov/points/{lat},{long}'
    response=requests.get(api_url)
    data=response.json()

    forecasturl = data['properties']['forecast']
    forecast_response = requests.get(forecasturl)
    forecast_data = forecast_response.json()

    weather_info = {
        'citName': data['properties']['relativeLocation']['properties']['city'],
        'temp': data['properties']['periods'][0]['temperature'],
        'humidity': data['properties']['periods'][0]['relativeHumidity'],
        'weatherDescription': data['properties']['periods'][0]['shortForecast']
    }

    return jsonify(weather_info)
    #state=data['properties']['relativeLocation']['properties']['state']



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
