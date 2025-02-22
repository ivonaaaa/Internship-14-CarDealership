import { Card, CardContent, Typography, Button } from "@mui/material";
import "../App.css";

const CarCard = ({ car, removeCar }) => {
  const isExpiring =
    new Date(car.registration) <=
    new Date(new Date().setMonth(new Date().getMonth() + 1));

  return (
    <Card className={`car-card ${isExpiring ? "car-card-expiring" : ""}`}>
      <CardContent>
        <Typography variant="h6">
          {car.brand} {car.model} ({car.year})
        </Typography>
        <Typography>Type: {car.type}</Typography>
        <Typography color="textSecondary">
          Registration Expires: {car.registration}
        </Typography>
        <Button
          variant="contained"
          color="error"
          onClick={() => removeCar(car.id)}
        >
          Remove
        </Button>
      </CardContent>
    </Card>
  );
};

export default CarCard;
