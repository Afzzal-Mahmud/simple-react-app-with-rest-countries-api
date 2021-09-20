import './App.css';
import LoadCountries from './Components/CountriesApi/LoadCountries';

function App() {
  return (
    <div className="App">
      {/* load Api data from LoadCountries component*/}
      <LoadCountries></LoadCountries>
    </div>
  );
}

export default App;
