const FamousPeople = (props) => {
  let content = props.persons.map((person) => (
    <div key={person.id}>
      <h2>{person.text}</h2>
      <h3>{person.date}</h3>
      <br></br>
    </div>
  ));
  return <>{content}</>;
};

export default FamousPeople;
