import MenuItem from "./MenuItem";
import "../Menu.css";
const MenuList = (props) => {
  return (
    <ul className="menulist">
      {props.menuItems.map((item) => (
        <MenuItem
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          removeHandler={props.removeHandler}
        />
      ))}
    </ul>
  );
};

export default MenuList;
