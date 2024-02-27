import { useState } from "react";
import Vehicle from "./Vehicle";

function Vehicles({ title, vehicles, setVehicles }) {
  const [formData, setFormData] = useState({ make: "", model: "" });

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };
  const deleteVehicle = (id) => {
    let _vehicles = [...vehicles];
    _vehicles = _vehicles.filter((vehicle) => vehicle.id !== id);
    setVehicles(_vehicles);
  };

  const addVehicle = (event) => {
    event.preventDefault();
    //spread the original vehicles and add the new one
    setVehicles([
      ...vehicles,
      {
        id: Math.max(...vehicles.map((o) => o.id + 1)),
        make: formData.make,
        model: formData.model,
        likes: 0,
      },
    ]);
    setFormData({ make: "", model: "" });
  };
  const updateLikes = (id, amount) => {
    let _vehicles = [...vehicles];
    let _vehicle = _vehicles.find((f) => f.id == id);
    _vehicle.likes += amount;
    setVehicles(_vehicles);
  };

  return (
    <>
      <h1>{title ? title : "Vehicles"}</h1>
      <div className="row">
        <div className="card col-md-4">
          <form onSubmit={addVehicle}>
            <div className="class-header text-primary">Add a Vehicle</div>
            <div className="class-body">
              <input
                id="make"
                className="form-control"
                type="text"
                placeholder="make of vehicle"
                value={formData.make}
                onChange={handleInputChange}
              />
              <input
                id="model"
                className="form-control"
                type="text"
                placeholder="model of vehicle"
                value={formData.model}
                onChange={handleInputChange}
              />
            </div>
            <div className="class-footer pull-right">
              <button
                type="submit"
                className="btn btn-primary btn-sm pull-right"
              >
                Add
              </button>
            </div>
          </form>
        </div>

        {vehicles.map((v, i) => (
          <Vehicle
            key={i}
            vehicle={v}
            deleteVehicle={deleteVehicle}
            updateLikes={updateLikes}
          />
        ))}
      </div>
    </>
  );
}

export default Vehicles;
