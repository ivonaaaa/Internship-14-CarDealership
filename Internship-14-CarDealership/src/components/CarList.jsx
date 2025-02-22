import CarCard from "./CarCard";
import { Box, Typography } from "@mui/material";

const CarList = ({ cars, removeCar }) => {
  return (
    <Box sx={{ marginTop: 3 }}>
      {cars.length === 0 ? (
        <Typography variant="h6" textAlign="center">
          No cars available at the moment.
        </Typography>
      ) : (
        cars.map((car) => (
          <CarCard key={car.id} car={car} removeCar={removeCar} />
        ))
      )}
    </Box>
  );
};

export default CarList;
