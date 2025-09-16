from flask import Flask, request, jsonify
from flask_cors import CORS
import json

api = Flask(__name__)
CORS(api)

@app.route("/api/message", methods=["POST"])
def message():
    name = request.data.decode("utf-8")
    with open('data.json', 'r', encoding='utf-8') as f:
        data = json.load(f)
    chineseName = data.get(name)
    if name in data:
        return jsonify({"message": f"{name}的中文名字是: {chineseName}"})
    else:
        return jsonify({"message": f"資料庫裡沒有{name}的中文名字"})

if __name__ == "__main__":
    api.run(host="0.0.0.0", port=8000, debug=True)