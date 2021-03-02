import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [fiveDailyPrayers, setFiveDailyPrayers] = useState({
    Fajr: "",
    Dhuhr: "",
    Asr: "",
    Maghrib: "",
    Isha: ""
  });

  useEffect(() => {
    fetch("https://api.pray.zone/v2/times/today.json?city=london&school=1")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          for (let prayer in result.results.datetime[0].times) {
            if (fiveDailyPrayers[prayer] !== undefined) {
              setFiveDailyPrayers((prevState) => ({
                ...prevState,
                [prayer]: result.results.datetime[0].times[prayer]
              }));
            }
          }
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    console.log(fiveDailyPrayers.for);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>London prayer time for today</p>
          {Object.keys(fiveDailyPrayers).map((key, index) => (
            <p key={index}>
              {key} prayer time: {fiveDailyPrayers[key]}
            </p>
          ))}
        </header>
      </div>
    );
  }
}

export default App;
