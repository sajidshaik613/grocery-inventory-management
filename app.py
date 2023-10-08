from flask import Flask, request, jsonify
from flask_cors import CORS,cross_origin
app = Flask(__name__)

cors = CORS(app, resources={r"*": {"origins": "*"}})
# CORS(app,)

# Create an empty grocery inventory
inventory = []

# POST endpoint to add grocery items to the inventory
@app.route('/add_item', methods=['POST'])
@cross_origin(origin='localhost',headers=['Content- Type','application/json'])
def add_item():
    data = request.get_json()
    if 'name' in data and 'quantity' in data:
        item = {
            'name': data['name'],
            'quantity': data['quantity']
        }
        inventory.append(item)
        return jsonify({"message": "Item added to inventory"}), 201
    else:
        return jsonify({"error": "Invalid data format"}), 400

# GET endpoint to retrieve all items in the inventory

@app.route('/get_inventory', methods=['GET'])
@cross_origin(origin='localhost',headers=['Content- Type','application/json'])
def get_inventory():
    return jsonify(inventory)

if __name__ == '__main__':
    app.run(debug=True)
