import { useState } from "react";
import AddItem from "./components/AddItem";
import MenuList from "./components/MenuList";
import "./Menu.css";
// completed
const menu = [
  {
    id: 1,
    name: "hamburger",
    price: 9,
  },
  {
    id: 2,
    name: "pizza",
    price: 12,
  },
  {
    id: 3,
    name: "meatballs",
    price: 10,
  },
];

/*const removeHandler = (id) => {
    console.log("Delete in app.js: " + id);
  };*/

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);

  const removeHandler = (id) => {
    console.log("Clicked " + id);
    setMenuItems((prevMenuItems) =>
      prevMenuItems.filter((item) => {
        return item.id !== id;
      })
    );
  };

  return (
    <div>
      <div className="menu">
        <h1>Hyvä Rafla</h1>
        <MenuList menuItems={menuItems} removeHandler={removeHandler} />
      </div>
      <AddItem setMenuItems={setMenuItems} />
    </div>
  );
};

export default App;
