export const categories = [
  {
    id: 1,
    name: 'Pizza',
    image: require('../assets/images/pizzaIcon.png'),
  },
  {
    id: 2,
    name: 'Burger',
    image: require('../assets/images/burgerIcon.png'),
  },
  {
    id: 3,
    name: 'Italian',
    image: require('../assets/images/italianFoodIcon.png'),
  },
  {
    id: 4,
    name: 'Chinese',
    image: require('../assets/images/chineseIcon.png'),
  },
  {
    id: 5,
    name: 'Noodles',
    image: require('../assets/images/noodlesIcon.png'),
  },
  {
    id: 6,
    name: 'Sweets',
    image: require('../assets/images/sweetsIcon.png'),
  },
]

export const featured = {
  id: 1,
  title: 'Hot and Spicy',
  description: 'soft and tender fried chicken',
  restaurants: [
    {
      id: 1,
      name: 'Food Fanfare',
      image: require('../assets/images/pizza.png'),
      description: 'Hot and spicy pizzas',
      lng: -85.5324269,
      lat: 38.2145602,
      address: '434 second street',
      stars: 4,
      reviews: '4.4k',
      category: 'Italian food',
      dishes: [
        {
          id: 1,
          name: 'pizza',
          description: 'cheezy garlic pizza',
          price: 10,
          image: require('../assets/images/pizzaDish.png'),
        },
        {
          id: 2,
          name: 'burger',
          description:
            'Tasty, delicious, and has me craving more on the first bite.',
          price: 10,
          image: require('../assets/images/zinge-burger.jpg'),
        },
        {
          id: 3,
          name: 'chicken wings',
          description:
            "white meat, even though they're juicier and have a more concentrated poultry flavor, like dark meat.",
          price: 10,
          image: require('../assets/images/chicken-wings.jpg'),
        },
      ],
    },
    {
      id: 2,
      name: 'Food Fantasia',
      image: require('../assets/images/food-fantasia.jpg'),
      description:
        'Taste Wonderland: Food Fantasia - where flavors dance on your palate!',
      lng: -85.5324269,
      lat: 38.2145602,
      address: '101 second street',
      stars: 4,
      reviews: '4.2k',
      category: 'Fast Food',
      dishes: [
        {
          id: 1,
          name: 'pizza',
          description: 'cheezy garlic pizza',
          price: 10,
          image: require('../assets/images/pizzaDish.png'),
        },
        {
          id: 2,
          name: 'burger',
          description:
            'Tasty, delicious, and has me craving more on the first bite.',
          price: 10,
          image: require('../assets/images/zinge-burger.jpg'),
        },
        {
          id: 3,
          name: 'chicken wings',
          description:
            "white meat, even though they're juicier and have a more concentrated poultry flavor, like dark meat.",
          price: 10,
          image: require('../assets/images/chicken-wings.jpg'),
        },
      ],
    },
    {
      id: 3,
      name: 'Food Frenzy',
      image: require('../assets/images/food-frenzy.jpg'),
      description:
        'Culinary Craze: Food Frenzy - where every bite ignites delight!',
      lng: -85.5324269,
      lat: 38.2145602,
      address: '201 second street',
      stars: 5,
      reviews: '1.4k',
      category: 'Fast Food',
      dishes: [
        {
          id: 1,
          name: 'pizza',
          description: 'cheezy garlic pizza',
          price: 10,
          image: require('../assets/images/pizzaDish.png'),
        },
        {
          id: 2,
          name: 'burger',
          description:
            'Tasty, delicious, and has me craving more on the first bite.',
          price: 10,
          image: require('../assets/images/zinge-burger.jpg'),
        },
        {
          id: 3,
          name: 'chicken wings',
          description:
            "white meat, even though they're juicier and have a more concentrated poultry flavor, like dark meat.",
          price: 10,
          image: require('../assets/images/chicken-wings.jpg'),
        },
      ],
    },
  ],
}
