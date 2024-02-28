import { useState, useEffect } from "react";

function Filter({ vehicles, setVehicles }) {
  const [filterText, setFilterText] = useState("");

  useEffect(() => {
    console.log("Applying filters:", filterText);
    const filtered = vehicles.filter((item) => {
      if (filterText.length > 0)
        return item.title.toLowerCase().includes(filterText.toLowerCase());
      return true;
    });
    setVehicles(filtered);
  }, [vehicles, filterText]);

  return (
    <div>
      <input
        type="text"
        placeholder="filter vehicles..."
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <button onClick={() => console.log("clicked filter")}>Filter</button>
    </div>
  );
}

export default Filter;
