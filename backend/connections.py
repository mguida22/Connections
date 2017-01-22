import base64, os, uuid

from MyQR import myqr
from flask import Flask, json, jsonify, request


with open("config.json") as config:
    config = json.loads(config.read())

app = Flask(__name__, template_folder="templates")
app.debug = config["debug"]


def generateQRcode(msg):
    # tempfile name to save qr code to
    save_name = "{}.png".format(uuid.uuid4().hex)

    # create a qr code
    version, level, qr_name = myqr.run(
        msg,
        version=1,
        level='H',
        picture=os.path.join(os.getcwd(), config["base_image_dir"], 'penguin.png'),
        colorized=True,
        contrast=1.0,
        brightness=1.0,
        save_name=save_name,
        save_dir=os.path.join(os.getcwd(), config["tmp_dir"])
    )

    # convert image file to base64 encoding
    with open(qr_name, "rb") as qr_file:
        encoded_qr = 'data:image/png;base64,{}'.format(base64.b64encode(qr_file.read()))

    # remove our qr code file, now that we have the encoding
    os.remove(qr_name)

    return encoded_qr

@app.route("/qr", methods=["POST"])
def qr():
    social = request.get_json()["social"]

    qr_data = ''
    for s in social:
        qr_data += "{}:{};".format(s, social[s])

    qr_encoding = generateQRcode(qr_data)

    return qr_encoding

@app.errorhandler(404)
def four_oh_four(error):
    return "resource not found", 404

if __name__ == "__main__":
    app.run(host=config["host"], port=config["port"])
