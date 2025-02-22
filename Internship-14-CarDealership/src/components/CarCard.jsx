import { Card, CardContent, Typography, Button } from "@mui/material";

const CarCard = ({ car, removeCar }) => {
  const isExpiring =
    new Date(car.registration) <=
    new Date(new Date().setMonth(new Date().getMonth() + 1));

  return (
    <Card
      sx={{
        marginBottom: 2,
        border: isExpiring ? "2px solid red" : "1px solid #ddd",
        padding: 2,
      }}
    >
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
          sx={{ marginTop: 1 }}
        >
          Remove
        </Button>
      </CardContent>
    </Card>
  );
};

export default CarCard;
