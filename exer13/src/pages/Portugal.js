import { useHistory } from "react-router-dom";

const PortugalPage = () => {
  const history = useHistory();
  const returnHomeHandler = () => {
    history.push("/");
  };

  return (
    <>
      <h2>Welcome to Portugal</h2>
      <button onClick={returnHomeHandler}>Back to home</button>
    </>
  );
};

export default PortugalPage;
