import React, { useState } from "react";
import Header from "./components/Header";
import AddItem from "./components/AddItem";
import ItemList from "./components/ItemList";
import { AppContext } from "./context";

function App() {
  const [items, setItems] = useState([]);
  const [showDisplay, setShowDisplay] = useState("");
  const dispatchItemEvent = (actionType, payload) => {
    switch (actionType) {
      case "ADD_ITEM":
        setItems([...items, payload.newItem]);
        setShowDisplay(() => setShowDisplay(!showDisplay));
        return;
      case "REMOVE_ITEM":
        setItems(items.filter((item) => item.id !== payload.itemId));
        return;
      case "Toggle_Button":
        setShowDisplay(() => setShowDisplay(!showDisplay));
        return;
      default:
        return;
    }
  };

  return (
    <div className="App">
      <AppContext.Provider value={{ items, dispatchItemEvent }}>
        <Header />

        {showDisplay ? <AddItem /> : <ItemList />}

        {/* // <AddItem />
				// <ItemList /> */}
      </AppContext.Provider>
    </div>
  );
}

export default App;
