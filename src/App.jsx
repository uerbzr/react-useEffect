import { useState, useEffect } from "react";
import { VEHICLES_ENDPOINT } from "./consts";
import Vehicles from "./components/Vehicles";
import "./App.css";
import Filter from "./Filter";
function App() {
  const [vehicles, setVehicles] = useState([]);

  //[] is the dependency array - what should we listen to?
  //if empty.. then we'll run this at least once..
  useEffect(() => {
    console.log(
      "Running my effect only the first time the component is rendered; note: dependency array is empty []..."
    );
    fetch(VEHICLES_ENDPOINT)
      .then((response) => response.json())
      .then((data) => {
        console.log("received data:", data);
        console.log("setting new state....");
        setVehicles(data);
      });
  }, []);
  return (
    <>
      <Filter vehicles={vehicles} setVehicles={setVehicles} />
      <Vehicles
        title={"Vehicle Voting"}
        vehicles={vehicles}
        setVehicles={setVehicles}
      />
    </>
  );
}

export default App;

//side effects: things having side effects of something else e.g. state changing
