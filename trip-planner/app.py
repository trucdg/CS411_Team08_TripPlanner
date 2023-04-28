import requests

def get_weather_results(zip_code, api_key):
    """"return the data from the api call as json """

    api_url = f"https://api.openweathermap.org/data/2.5/weather?zip={zip_code}&appid={api_key}"
    response = requests.get(api_url)
    return response.json()

print(get_weather_results("02368", "93e91734d861a4841055ecb6312d4c40"))
