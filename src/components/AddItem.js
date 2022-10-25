import React, { useContext, useState } from "react";
import { AppContext } from "../context";

const AddItem = () => {
  const { dispatchItemEvent } = useContext(AppContext);
  const [title, setTitle] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const handleAddItem = () => {
    if (title !== "" && quantity !== "" && price !== "") {
      const item = { id: Math.random(), title, quantity, price };
      dispatchItemEvent("ADD_ITEM", { newItem: item });
    } else {
      alert("Please Fill The Input First ");
    }
  };

  return (
    <div>
      {/* <h3>Add New User</h3> */}
      <label>Title</label>
      <input
        type="text"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        placeholder="Insert Title"
        required
      />
      <br />

      <label>Quantity</label>
      <input
        type="number"
        value={quantity}
        onChange={(e) => {
          setQuantity(e.target.value);
        }}
        placeholder="0"
        required
      />
      <br />

      <label>Price</label>
      <textarea
        type="number"
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
        required
        placeholder="0.00"
      />
      <br />
      <button onClick={handleAddItem}>Add Item</button>
    </div>
  );
};

export default AddItem;
