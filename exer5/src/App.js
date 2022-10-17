import CountryList from "./components/CountryList";
// Completed
const easternEurope = [
  {
    name: "Romania",
    capital: "Bukarest",
  },
  {
    name: "Poland",
    capital: "Warsaw",
  },
  {
    name: "Hungary",
    capital: "Budapest",
  },
];

const southernEurope = [
  {
    name: "Italy",
    capital: "Rome",
  },
  {
    name: "Greece",
    capital: "Athens",
  },
  {
    name: "Malta",
    capital: "Valetta",
  },
];
const westernEurope = [
  {
    name: "Germany",
    capital: "Berlin",
  },
  {
    name: "Austria",
    capital: "Vienna",
  },
  {
    name: "Liechtenstein",
    capital: "Vaduz",
  },
];
function App() {
  return (
    <div>
      <h1>Countries</h1>
      <CountryList countries={easternEurope} regionName="Eastern Europe" />
      <CountryList countries={southernEurope} regionName="Southern Europe" />
      <CountryList countries={westernEurope} regionName="Western Europe" />
    </div>
  );
}

export default App;
