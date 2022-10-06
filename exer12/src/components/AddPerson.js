import { useRef } from "react";

const AddPerson = (props) => {
  const textRef = useRef("");
  const dateRef = useRef("");

  const submitHandler = (event) => {
    event.preventDefault();

    const person = {
      text: textRef.current.value,
      date: dateRef.current.value,
    };

    props.onAddPerson(person);

    textRef.current.value = "";
    dateRef.current.value = "";
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="text">Text</label>
        <textarea rows="5" id="text" ref={textRef}></textarea>
      </div>
      <div>
        <label htmlFor="date">Date</label>
        <input type="date" id="date" ref={dateRef} />
      </div>

      <button>Add Person</button>
    </form>
  );
};

export default AddPerson;
