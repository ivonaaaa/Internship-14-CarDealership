import { useState, useEffect } from "react";
import "./styles/App.css";
import "./styles/variables.css";
import backgroundImage from "./assets/images/background-image.jpg";
import CarForm from "./components/CarForm";
import CarList from "./components/CarList";
import Filter from "./components/FilterCars";
import { v4 as uuidv4 } from "uuid";

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
    window.addTestCars = () => {
      const testCars = [
        {
          brand: "Toyota",
          model: "Yaris",
          year: 2025,
          type: "Sedan",
          registration: "2026-01-12",
        },
        {
          brand: "Audi",
          model: "Q5",
          year: 2024,
          type: "SUV",
          registration: "2025-03-17",
        },
        {
          brand: "Tesla",
          model: "Model 3",
          year: 2022,
          type: "Hybrid",
          registration: "2025-05-26",
        },
        {
          brand: "Lamborghini",
          model: "Countach",
          year: 2018,
          type: "Sports Car",
          registration: "2025-05-14",
        },
        {
          brand: "Peugeot",
          model: "206",
          year: 2016,
          type: "Sedan",
          registration: "2025-04-29",
        },
        {
          brand: "Peugeot",
          model: "208",
          year: 2016,
          type: "Sedan",
          registration: "2025-10-16",
        },
        {
          brand: "Nissan",
          model: "Frontier",
          year: 2013,
          type: "Truck",
          registration: "2025-03-18",
        },
        {
          brand: "BMW",
          model: "E36",
          year: 2010,
          type: "Roadster",
          registration: "2025-03-08",
        },
        {
          brand: "Mazda",
          model: "MX5 Miata",
          year: 2008,
          type: "Roadster",
          registration: "2026-01-14",
        },
        {
          brand: "Porsche",
          model: "911",
          year: 1990,
          type: "Sports Car",
          registration: "2026-01-07",
        },
      ].map((car) => ({ ...car, id: uuidv4() }));

      setCars(testCars);
    };
  }, []);

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
      <img
        src={backgroundImage}
        alt="Background"
        className="background-image"
      />
      <CarForm addCar={addCar} />
      <Filter setFilter={setFilter} />
      <CarList cars={filteredCars} removeCar={removeCar} />
    </div>
  );
}

export default App;
