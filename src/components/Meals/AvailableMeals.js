import React from "react";
import classes from "./AvailableMeals.module.css";

import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 30000,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 21000,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 15000,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 23000,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((m) => (
    <MealItem
      id={m.id}
      key={m.id}
      name={m.name}
      description={m.description}
      price={m.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>{mealsList}</Card>
    </section>
  );
};

export default AvailableMeals;
