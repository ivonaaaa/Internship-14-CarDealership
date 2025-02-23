import { Card, CardContent, Typography, Button } from "@mui/material";
import "../styles/App.css";

const CarCard = ({ car, removeCar }) => {
  const isExpiring =
    new Date(car.registration) <=
    new Date(new Date().setMonth(new Date().getMonth() + 1));

  return (
    <Card className={`car-card ${isExpiring ? "car-card-expiring" : ""}`}>
      <CardContent>
        <Typography className="card-text">
          {car.brand} {car.model} ({car.year})
        </Typography>
        <Typography className="card-text">Type: {car.type}</Typography>
        <Typography className="card-text">
          Registration Expires: {car.registration}
        </Typography>
        <Button
          className="remove-btn"
          variant="contained"
          onClick={() => removeCar(car.id)}
        >
          Remove
        </Button>
      </CardContent>
    </Card>
  );
};

export default CarCard;
