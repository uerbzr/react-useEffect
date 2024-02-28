import { useState, useEffect } from "react";

function Filter({ vehicles, setVehicles }) {
  const [filterText, setFilterText] = useState("");

  useEffect(() => {
    console.log("Applying filters:", filterText);
    const filtered = vehicles.filter((item) => {
      if (filterText.length > 0) {
        return item.make.toLowerCase().includes(filterText.toLowerCase());
      } else {
        setVehicles(vehicles);
      }
      return true;
    });
    setVehicles(filtered);
  }, [filterText]);

  return (
    <div>
      <input
        type="text"
        placeholder="filter vehicles..."
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <button onClick={() => console.log({ filterText })}>Filter</button>
    </div>
  );
}

export default Filter;
