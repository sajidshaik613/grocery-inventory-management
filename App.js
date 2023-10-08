import React, { useState, useEffect } from 'react';
import AddItem from './AddItem';
import Inventory from './Inventory';

function App() {
  const [inventory, setInventory] = useState([]);

  // Function to add an item to the inventory
  const addItemToInventory = (item) => {
    fetch('http://127.0.0.1:5000/add_item', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    })
      .then((response) => response.json())
      .then((data) => {
        alert(data.message);
        refreshInventory();
      })
      .catch((error) => {
        alert('Error: ' + error.message);
      });
  };

  // Function to retrieve and update the inventory
  const refreshInventory = () => {
    fetch('http://127.0.0.1:5000/get_inventory')
      .then((response) => response.json())
      .then((data) => {
        setInventory(data);
      })
      .catch((error) => {
        console.log('error',error)
        alert('Error: ' + error.message);
      });
  };

  useEffect(() => {
    refreshInventory();
  }, []);

  return (
    <div>
      <h1>Grocery Inventory Management</h1>
      <AddItem onAddItem={addItemToInventory} />
      <Inventory inventory={inventory} />
    </div>
  );
}

export default App;
