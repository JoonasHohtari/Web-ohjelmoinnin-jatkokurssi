const Counter = (props) => {
  const incrementValue = () => {
    props.setValue((x) => x + 1);
  };
  return (
    <div>
      <p>{props.value}</p>
      <button onClick={incrementValue}>+</button>
    </div>
  );
};

export default Counter;

// En tiedä miten jatkaa
