import { useContext } from "react";
import { AppContext } from "../context";

function Header() {
  const { dispatchItemEvent, showDisplay } = useContext(AppContext);
  const handlebutton = () => {
    const item = { showDisplay };
    dispatchItemEvent("Toggle_Button", { newItem: item });
  };
  return (
    <>
      <h1>Personal Shopping List </h1>
      <button onClick={handlebutton}> Go Back </button>
    </>
  );
}

export default Header;
