import dummyData from "./dummyData.json"



export function getRestaurants() {
  const restaurants = dummyData.restaurants.map((restaurant) => ({
    id: restaurant.id,
    name: restaurant.name,
    image: restaurant.image,
  }));
  return restaurants;
}

export function getFoodsByRestaurantId(restaurantId) {
  const foods = dummyData.restaurants
    .filter((restaurant) => restaurant.id === restaurantId)
    .flatMap((restaurant) => restaurant.foods); 

  console.log(foods);

  return foods;
}



