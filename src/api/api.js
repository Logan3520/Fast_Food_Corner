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
  const Food = dummyData.restaurants.filter( (restaurant)=>{     
     restaurant.id === restaurantId
      }).map((restaurant)=>({ Food: restaurant.foods}))
  console.log( Food);
  
  return Food;
}



