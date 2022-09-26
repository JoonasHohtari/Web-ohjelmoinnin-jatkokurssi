import { useState } from "react";
import Counter from "./components/Counter";

function App() {
  const clickHandler = () => {};

  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);

  return (
    <div>
      <h1>Counter</h1>
      <Counter value={value1} setValue={setValue2} />
      <Counter value={value2} setValue={setValue1} />
    </div>
  );
}

export default App;
