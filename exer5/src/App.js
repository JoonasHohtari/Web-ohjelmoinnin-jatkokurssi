import CountryList from "./components/CountryList";

const easternEurope = [
  {
    name: "Romania",
    capital: "Bukarest",
  },
  {
    name: "Poland",
    capital: "Jonathan Demme",
  },
  {
    name: "Hungary",
    capital: "Budapest",
  },
];

const scifi = [
  {
    name: "Metropolis",
    capital: "Fritz Lang",
  },
  {
    name: "2001: A Space Odyssey",
    capital: "Stanley Kubrick",
  },
  {
    name: "Robocop",
    capital: "Paul Verhoeven",
  },
];
const action = [
  {
    name: "Taken",
    capital: "Pierre Morel",
  },
  {
    name: "The Batman",
    capital: "Matt Reeves",
  },
  {
    name: "Die Hard",
    capital: "John McTiernan",
  },
];
function App() {
  return (
    <div>
      <h1>Countries</h1>
      <GenreList countries={easternEurope} regionName="Eastern Europe" />
      <GenreList countries={centralEurope} regionName="Central Europe" />
      <GenreList countries={westernEurope} regionName="Western Europe" />
    </div>
  );
}

export default App;
