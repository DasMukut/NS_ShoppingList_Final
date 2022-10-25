import { useContext } from "react";
import { AppContext } from "../context";
// import "./item.css";
const Item = ({ item }) => {
  const { dispatchItemEvent } = useContext(AppContext);

  const handleRemoveItem = () => {
    dispatchItemEvent("REMOVE_ITEM", { itemId: item.id });
  };
  return (
    <div className="Item" style>
      <h3>{item.title}</h3>
      <h4>{item.quantity}</h4>
      <h4>{item.price}</h4>
      <button className="btn" onClick={handleRemoveItem}>
        Delete
      </button>
    </div>
  );
};

export default Item;
