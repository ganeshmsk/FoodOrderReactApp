import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Paneer Butter Masala',
    description: "Vegetarian's Meat",
    price: 130,
  },
  {
    id: 'm2',
    name: 'Broccoli Soup',
    description: 'Healthy vegetable',
    price: 180,
  },
  {
    id: 'm3',
    name: 'Potato Nuggets',
    description: 'Consumed Daily',
    price: 40,
  },
  {
    id: 'm4',
    name: 'Onion Fried Rice',
    description: 'Used in everything',
    price: 60,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;