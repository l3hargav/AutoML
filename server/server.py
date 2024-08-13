from flask import Flask, request, jsonify
import json
import pandas as pd
import io


app = Flask(__name__)

@app.route("/")
def main():
    return "This is the Python Backend"

@app.route("/test")
def test():
    return "Python Backend is working"

@app.route("/get_data", methods=["POST"])
def get_data():
    try :
        data = json.loads(request.data)
        print("Received JSON data:", data)
        buffer_data = data['buffer']['data']

        csv_bytes = bytes(buffer_data)

        csv_string = csv_bytes.decode('utf-8')

        df = pd.read_csv(io.StringIO(csv_string))
        print(df.head())
        return jsonify({"message": "Data received successfully"}), 200
    except json.JSONDecodeError as e:
        return jsonify({"error": "Invalid JSON data"}), 400


# @app.route("/data_file", methods=["GET"])
# def get_data():



if __name__ == '__main__':
    app.run(port=8000, debug=True)