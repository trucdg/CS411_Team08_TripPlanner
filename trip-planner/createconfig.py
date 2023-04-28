from configparser import ConfigParser

config = ConfigParser()

config["openweatherapi"] = {
    "apiKey" : "93e91734d861a4841055ecb6312d4c40"
}

with open("config.ini", "w") as f:
    config.write(f)