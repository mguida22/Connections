import json
from connections import app

with open("config.json") as config:
    config = json.loads(config.read())

if __name__ == "__main__":
    app.run(host=config["host"], port=config["port"])
