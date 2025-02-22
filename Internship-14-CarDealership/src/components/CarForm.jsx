import { useState } from "react";
import { TextField, Button, MenuItem, Box } from "@mui/material";

const CarForm = ({ addCar }) => {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [type, setType] = useState("");
  const [year, setYear] = useState("");
  const [registration, setRegistration] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!brand || !model || !type || !year || !registration) {
      alert("All fields are required!");
      return;
    }

    const newCar = {
      id: Math.max(0, ...cars.map((car) => car.id)) + 1,
      brand,
      model,
      type,
      year: parseInt(year),
      registration,
    };

    addCar(newCar);
    setBrand("");
    setModel("");
    setType("");
    setYear("");
    setRegistration("");
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <TextField
        label="Brand"
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
      />
      <TextField
        label="Model"
        value={model}
        onChange={(e) => setModel(e.target.value)}
      />
      <TextField
        select
        label="Type"
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <MenuItem value="Sedan">Sedan</MenuItem>
        <MenuItem value="SUV">SUV</MenuItem>
        <MenuItem value="Hatchback">Truck</MenuItem>
        <MenuItem value="Hatchback">Sports Car</MenuItem>
        <MenuItem value="Hatchback">Roadster</MenuItem>
        <MenuItem value="Hatchback">Hybrid</MenuItem>
      </TextField>
      <TextField
        label="Year"
        type="number"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        fullWidth
      />
      <TextField
        label="Registration Expiry"
        type="date"
        value={registration}
        onChange={(e) => setRegistration(e.target.value)}
      />
      <Button variant="contained" type="submit">
        Add Car
      </Button>
    </Box>
  );
};

export default CarForm;
