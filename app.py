from flask import Flask
from flask import request, jsonify
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

app.config["DEBUG"] = True
@app.route("/", methods=["GET", "POST"])
def home():

    return {
        'Name':"geek", 
        "Age":"22",
        "Date":"12/12/2020", 
        "programming":"python"
        }

app.run()