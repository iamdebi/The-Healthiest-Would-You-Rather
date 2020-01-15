use healthyquiz;

db.dropDatabase();


db.questions.insertMany([{
    option1: "250ml of ice cream",
    option2: "44g of butter",
    responseText: "250ml of ice cream and 44g of butter have the same amount of fat",
    url1: "http://localhost:8080/img/ice-cream.png",
    url2: "http://localhost:8080/img/butter.png",
    totalResponses1: 148,
    totalResponses2: 2
  },

  {
    option1: "Seven sugar cubes",
    option2: "A can of coke",
    responseText: "Drinking a can of coke is the same as eating seven sugar cubes",
    url1: "http://localhost:8080/img/sugar-cubes.png",
    url2: "http://localhost:8080/img/can-of-coke.png",
    totalResponses1: 24,
    totalResponses2: 126
  },

  {
    option1: "A pasta sauce serving",
    option2: "1.5 teaspoons of salt",
    responseText: "A serving of ready-made pasta sauce contains 1.5g of salt",
    url1: "http://localhost:8080/img/pasta-sauce.png",
    url2: "http://localhost:8080/img/salt.png",
    totalResponses1: 144,
    totalResponses2: 6
  },

  {
    option1: "A slice of wholemeal bread",
    option2: "A blueberry muffin",
    responseText: "One blueberry muffin has the same fibre content as a slice of wholemeal bread",
    url1: "http://localhost:8080/img/bread.png",
    url2: "http://localhost:8080/img/muffin.png",
    totalResponses1: 52,
    totalResponses2: 98
  },

  {
    option1: "A boiled egg",
    option2: "8oz ribeye steak",
    responseText: "Both options have around the same amount of cholesterol",
    url1: "http://localhost:8080/img/egg.png",
    url2: "http://localhost:8080/img/steak.png",
    totalResponses1: 84,
    totalResponses2: 76
  },

  {
    option1: "Fast food meal and milkshake",
    option2: "Three avocados",
    responseText: "The calorie content of both of those options are the same",
    url1: "http://localhost:8080/img/mcdonalds.png",
    url2: "http://localhost:8080/img/avocado.png",
    totalResponses1: 81,
    totalResponses2: 69
  }

]);

db.users.insertMany([{
  responses: [1, 2, 1, 1, 2, 2, 1]
}])
