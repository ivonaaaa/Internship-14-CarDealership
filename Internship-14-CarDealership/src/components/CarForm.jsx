import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
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
      id: uuidv4(),
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
    <Box component="form" onSubmit={handleSubmit} className="car-form">
      <TextField
        label="Brand"
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
        fullWidth
      />
      <TextField
        label="Model"
        value={model}
        onChange={(e) => setModel(e.target.value)}
        fullWidth
      />
      <TextField
        select
        label="Type"
        value={type}
        onChange={(e) => setType(e.target.value)}
        fullWidth
      >
        <MenuItem value="Sedan">Sedan</MenuItem>
        <MenuItem value="SUV">SUV</MenuItem>
        <MenuItem value="Truck">Truck</MenuItem>
        <MenuItem value="Sports Car">Sports Car</MenuItem>
        <MenuItem value="Roadster">Roadster</MenuItem>
        <MenuItem value="Hybrid">Hybrid</MenuItem>
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
        fullWidth
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Button variant="contained" type="submit">
        Add Car
      </Button>
    </Box>
  );
};

export default CarForm;
