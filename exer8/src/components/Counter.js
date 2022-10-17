const Counter = (props) => {
  let count = 0;
  const incrementValue = () => {
    if (props.setValue2) {
      count++;
      props.value1++;
    } else {
      count++;
      props.value2++;
    }
  };
  return (
    <div>
      <p>
        <button onClick={incrementValue}></button>
      </p>
    </div>
  );
};

export default Counter;

// En tiedä miten jatkaa
