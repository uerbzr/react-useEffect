import { useState, useEffect } from "react";
import React from "react";

const url = "https://randomuser.me/api/";
function Owner() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`${url}`)
      .then((response) => response.json())
      .then((data) => setData(data.results[0]));
  }, []);

  return (
    <div>
      {data ? ( // if no data, show a "no data" msg
        <>
          <h5>Owner: {data.name.first}</h5>
          <p>
            <img src={data.picture.medium} className="zoom" />
          </p>
        </>
      ) : (
        <p>No data (yet)!</p>
      )}
    </div>
  );
}

export default Owner;
