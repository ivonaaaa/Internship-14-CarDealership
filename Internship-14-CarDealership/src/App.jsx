import { useState, useEffect } from "react";
import "./App.css";
import CarForm from "./components/CarForm";
import CarList from "./components/CarList";
import Filter from "./components/FilterCars";

function App() {
  const getCarsFromStorage = () => {
    const savedCars = localStorage.getItem("cars");
    return savedCars ? JSON.parse(savedCars) : [];
  };

  const saveCarsToStorage = (cars) => {
    localStorage.setItem("cars", JSON.stringify(cars));
  };

  const [cars, setCars] = useState(getCarsFromStorage() || []);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    saveCarsToStorage(cars);
  }, [cars]);

  const addCar = (newCar) => {
    if (cars.length >= 10) {
      alert("Cannot add more than 10 cars!");
    } else setCars((prevCars) => [...prevCars, newCar]);
  };

  const removeCar = (carId) => {
    setCars((prevCars) => prevCars.filter((car) => car.id !== carId));
  };

  const sortCars = (cars) => {
    return [...cars].sort((a, b) => {
      if (a.year !== b.year) return b.year - a.year;
      if (a.brand !== b.brand) return a.brand.localeCompare(b.brand);
      return a.model.localeCompare(b.model);
    });
  };

  const filteredCars = sortCars(
    cars.filter(
      (car) =>
        car.brand.toLowerCase().includes(filter.toLowerCase()) ||
        car.model.toLowerCase().includes(filter.toLowerCase())
    )
  );

  return (
    <div className="container">
      <h1>Car Inventory</h1>
      <CarForm addCar={addCar} />
      <Filter setFilter={setFilter} />
      <CarList cars={filteredCars} removeCar={removeCar} />
    </div>
  );
}

export default App;
