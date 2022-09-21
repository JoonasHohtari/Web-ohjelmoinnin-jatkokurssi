import { useState } from "react";

const MenuItem = (props) => {
  //                              Default value
  //    Muuttuja, jonka tilaa seurataan
  //const [name, setName] = useState(props.name);
  //    Funktio, jolla muutetaan tilaa
  const clickHandler = () => {
    console.log("Aloha");
    props.removeHandler(props.id);
  };

  return (
    <div>
      <p>
        {props.name} {props.price}
      </p>
      <button onClick={clickHandler}>Delete</button>
    </div>
  );
};

export default MenuItem;
