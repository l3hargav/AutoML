from flask import Flask, request, jsonify
import json
import pandas as pd
import io
import requests


app = Flask(__name__)

df = pd.DataFrame()

@app.route("/")
def main():
    return "This is the Python Backend"

@app.route("/test")
def test():
    return "Python Backend is working"

@app.route("/get_data", methods=["POST"])
def get_data():
    try :
        global df 
        data = json.loads(request.data)
        print("Received JSON data:")
        buffer_data = data['buffer']['data']
        # print(data)
        # print("--------------")
        # print(buffer_data)
        csv_bytes = bytes(buffer_data)

        csv_string = csv_bytes.decode('utf-8')

        
        df = pd.read_csv(io.StringIO(csv_string))
        print(df.head())

        return jsonify({"message": "Data received successfully"}), 200
    
    except json.JSONDecodeError as e:
        return jsonify({"error": "Invalid JSON data"}), 400
    
@app.route("/send_data", methods=["GET"])
def send_data():
    data = df.to_json(orient="records")
    return jsonify(data)

# @app.route("/data_file", methods=["GET"])
# def get_data():



if __name__ == '__main__':
    app.run(port=8000, debug=True)