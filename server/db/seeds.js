use healthyquiz;

db.dropDatabase();


db.questions.insertMany([{
    option1: "250ml of ice cream",
    option2: "44g of butter",
    responseText: "250ml of ice cream and 44g of butter have the same amount of fat",
    url1: "http://localhost:8080/img/ice-cream.jpg",
    url2: "http://localhost:8080/img/butter.jpg",
    totalResponses1: 142,
    totalResponses2: 8
  },

  {
    option1: "1 can of coke",
    option2: "7 sugar cubes",
    responseText: "1 can of coke is the same as eating 7 sugar cubes",
    url1: "http://localhost:8080/img/coke.jpg",
    url2: "http://localhost:8080/img/sugar-cubes.jpeg",
    totalResponses1: 124,
    totalResponses2: 26
  },

  {
    option1: "1 serving of ready made pasta sauce",
    option2: "1.5 teaspoons of salt",
    responseText: "1 serving of ready made pasta sauce contains 1.5g of salt",
    url1: "http://localhost:8080/img/pasta-sauce.jpg",
    url2: "http://localhost:8080/img/salt.jpg",
    totalResponses1: 132,
    totalResponses2: 18
  },

  {
    option1: "1 portion of cooked lentils",
    option2: "A hamburger",
    responseText: "55g of cooked lentils has nearly 18g of protein, more than the amount in a hamburger",
    url1: "http://localhost:8080/img/lentils.jpg",
    url2: "http://localhost:8080/img/hamburger.jpg",
    totalResponses1: 62,
    totalResponses2: 88
  },

  {
    option1: "A blueberry muffin",
    option2: "A slice of wholemeal bread",
    responseText: "1 blueberry muffin has the same fibre content as a slice of wholemeal bread",
    url1: "http://localhost:8080/img/muffin.jpg",
    url2: "http://localhost:8080/img/bread.jpeg",
    totalResponses1: 108,
    totalResponses2: 42
  },

  {
    option1: "8oz ribeye steak",
    option2: "1 boiled egg",
    responseText: "Both options have around the same amount of cholesterol, however the cholesterol found within a boiled egg is better for your heart",
    url1: "http://localhost:8080/img/steak.webp",
    url2: "http://localhost:8080/img/egg.jpg",
    totalResponses1: 94,
    totalResponses2: 66
  },

  {
    option1: "McDonalds double quarter pounder with cheese meal with fries and a banana milkshake",
    option2: "3 avocados",
    responseText: "The calorie content of both of these is the same",
    url1: "http://localhost:8080/img/mcdonalds.jpg",
    url2: "http://localhost:8080/img/avocados.jpg",
    totalResponses1: 81,
    totalResponses2: 69
  }

]);

db.users.insertMany([{
        responses: [1, 2, 1, 1, 2, 2, 1, 2],
        latitude: "55.865426",
        longitude: "-4.257861"
      },
