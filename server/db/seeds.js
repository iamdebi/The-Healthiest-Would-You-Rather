use healthyquiz;

db.dropDatabase();


db.questions.insertMany([{
    option1: "250ml of ice cream",
    option2: "44g of butter",
    responseText: "250ml of ice cream and 44g of butter have the same amount of fat",
    url1: "http://localhost:8080/img/ice-cream.jpg",
    url2: "http://localhost:8080/img/butter.jpg",
    totalResponses1: 148,
    totalResponses2: 2
  },

  {
    option1: "7 sugar cubes",
    option2: "A can of coke",
    responseText: "Drinking a can of coke is the same as eating 7 sugar cubes",
    url1: "http://localhost:8080/img/sugar-cubes.jpeg",
    url2: "http://localhost:8080/img/coke.jpg",
    totalResponses1: 24,
    totalResponses2: 126
  },

  {
    option1: "A pasta sauce serving",
    option2: "1.5 teaspoons of salt",
    responseText: "A serving of ready made pasta sauce contains 1.5g of salt",
    url1: "http://localhost:8080/img/pasta-sauce.jpg",
    url2: "http://localhost:8080/img/salt.jpg",
    totalResponses1: 144,
    totalResponses2: 6
  },

  {
    option1: "A slice of wholemeal bread",
    option2: "A blueberry muffin",
    responseText: "1 blueberry muffin has the same fibre content as a slice of wholemeal bread",
    url1: "http://localhost:8080/img/bread.jpeg",
    url2: "http://localhost:8080/img/muffin.jpg",
    totalResponses1: 52,
    totalResponses2: 98
  },

  {
    option1: "A boiled egg",
    option2: "8oz ribeye steak",
    responseText: "Both options have around the same amount of cholesterol, however the cholesterol found within a boiled egg is better for your heart",
    url1: "http://localhost:8080/img/egg.jpg",
    url2: "http://localhost:8080/img/steak.webp",
    totalResponses1: 84,
    totalResponses2: 76
  },

  {
    option1: "A double quarter pounder meal and milkshake",
    option2: "3 avocados",
    responseText: "The calorie content of both of those options are the same",
    url1: "http://localhost:8080/img/mcdonalds.jpg",
    url2: "http://localhost:8080/img/avocados.jpg",
    totalResponses1: 81,
    totalResponses2: 69
  }

]);

db.users.insertMany([{
  responses: [1, 2, 1, 1, 2, 2, 1]
}])
