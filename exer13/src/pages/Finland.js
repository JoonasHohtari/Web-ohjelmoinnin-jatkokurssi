import Modal from "../components/Modal";
import Backdrop from "../components/Backdrop";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const FinlandPage = () => {
  const [showModal, setShowModal] = useState(false);
  const history = useHistory();
  const showModalHandler = () => {
    setShowModal(true);
  };

  const hideModalHandler = () => {
    setShowModal(false);
  };

  const randomHandler = () => {
    let randomValue = Math.random();

    if (randomValue < 0.25) {
      history.push("/italy");
      //history.replace("/italy");
    } else if (randomValue < 0.5) {
      history.push("/brazil");
      //history.replace("/brazil");
    } else if (randomValue < 0.75) {
      history.push("/canada");
    } else {
      history.push("/portugal");
    }
  };

  return (
    <div>
      <h2>You are at Helsinki airport. Where do you want to travel?</h2>
      <button onClick={showModalHandler}>Go to random destination</button>
      {showModal && (
        <Modal onCancel={hideModalHandler} onConfirm={randomHandler} />
      )}
      {showModal ? <Backdrop onClick={hideModalHandler} /> : null}
    </div>
  );
};

export default FinlandPage;
