import React, { useState } from 'react';

function AddItem({ onAddItem }) {
  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState('');

  const handleAddItem = (e) => {
    e.preventDefault();
    onAddItem({ name: itemName, quantity: itemQuantity });
    setItemName('');
    setItemQuantity('');
  };

  return (
    <div>
      <h2>Add Item</h2>
      <form onSubmit={handleAddItem}>
        <label>
          Item Name:
          <input
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Quantity:
          <input
            type="number"
            value={itemQuantity}
            onChange={(e) => setItemQuantity(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

export default AddItem;
