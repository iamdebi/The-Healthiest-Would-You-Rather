use healthyquiz;

db.dropDatabase();


db.questions.insertMany([{
    option1: "250ml of ice cream",
    option2: "44g of butter",
    reponseText: "250ml of ice cream and 44g of butter have the same amount of fat",
    url1: "http://localhost:8080/img/ice-cream.jpg",
    url2: "http://localhost:8080/img/butter.jpg",
    totalResponses1: 0,
    totalResponses2: 0
  },

  {
    option1: "1 can of coke",
    option2: "7 sugar cubes",
    reponseText: "1 can of coke is the same as eating 7 sugar cubes",
    url1: "@/assets/ice-cream.jpg",
    url2: "@/assets/butter.jpg",
    totalResponses1: 0,
    totalResponses2: 0
  },

  {
    option1: "1 serving of ready made pasta sauce",
    option2: "1.5 teaspoons of salt",
    reponseText: "1 serving of ready made pasta sauce contains 1.5g of salt",
    url1: "@/assets/ice-cream.jpg",
    url2: "@/assets/butter.jpg",
    totalResponses1: 0,
    totalResponses2: 0
  },

  {
    option1: "1 portion of cooked lentils",
    option2: "A hamburger",
    reponseText: "55g of cooked lentils has nearly 18g of protein, more than the amount in a hamburger ",
    url1: "@/assets/ice-cream.jpg",
    url2: "@/assets/butter.jpg",
    totalResponses1: 0,
    totalResponses2: 0
  },

  {
    option1: "A blueberry muffins",
    option2: "A slice of wholemeal bread",
    reponseText: "1 blueberry muffin has the same fibre content as a slice of wholemeal bread",
    url1: "@/assets/ice-cream.jpg",
    url2: "@/assets/butter.jpg",
    totalResponses1: 0,
    totalResponses2: 0
  },

  {
    option1: "8oz ribeye stake",
    option2: "1 boiled egg",
    reponseText: "Both options have around the same amount of cholesterol, however the cholesterol found within a boiled egg is better for your heart",
    url1: "@/assets/ice-cream.jpg",
    url2: "@/assets/butter.jpg",
    totalResponses1: 0,
    totalResponses2: 0
  },

  {
    option1: "McDonalds double quarter pounder with cheese meal with fries and a banana milkshake",
    option2: "3 avocados",
    reponseText: "The calorie content of both of these is the same",
    url1: "@/assets/ice-cream.jpg",
    url2: "@/assets/butter.jpg",
    totalResponses1: 0,
    totalResponses2: 0
  }

]);

db.users.insertMany([{
        responses: [1, 2, 1, 1, 2, 2, 1, 2],
        latitude: "55.865426",
        longitude: "-4.257861"
      },