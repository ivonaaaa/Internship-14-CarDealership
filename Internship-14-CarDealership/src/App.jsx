import { useState, useEffect } from "react";
import "./App.css";
import CarForm from "./components/CarForm";
import CarList from "./components/CarList";

function App() {
  const [cars, setCars] = useState(getCarsFromStorage() || []);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    saveCarsToStorage(cars);
  }, [cars]);

  const addCar = (newCar) => {
    setCars((prevCars) => [...prevCars, newCar]);
  };

  const removeCar = (carId) => {
    setCars((prevCars) => prevCars.filter((car) => car.id !== carId));
  };

  return (
    <div className="container">
      <h1>Car Inventory</h1>
      <CarForm addCar={addCar} />
      <CarList cars={cars} removeCar={removeCar} />
    </div>
  );
}

export default App;

// Helper functions
function getCarsFromStorage() {
  const savedCars = localStorage.getItem("cars");
  return savedCars ? JSON.parse(savedCars) : [];
}

function saveCarsToStorage(cars) {
  localStorage.setItem("cars", JSON.stringify(cars));
}
