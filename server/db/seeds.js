use healthyquiz;

db.dropDatabase();

db.questions.insertMany([{
    option1: "250ml of ice cream",
    option2: "44g of butter",
    reponseText: "250ml of ice cream and 44g of butter have the same amount of fat",
    url1: "@/assets/ice-cream.jpg",
    url2: "@/assets/butter.jpg",
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
    option1: "20g of ice cream",
    option2: "40g of butter",
    reponseText: "20g of ice cream and 40g of butter have the same amount of fat",
    url1: "@/assets/ice-cream.jpg",
    url2: "@/assets/butter.jpg",
    totalResponses1: 0,
    totalResponses2: 0
  },

  {
    option1: "20g of ice cream",
    option2: "40g of butter",
    reponseText: "20g of ice cream and 40g of butter have the same amount of fat",
    url1: "@/assets/ice-cream.jpg",
    url2: "@/assets/butter.jpg",
    totalResponses1: 0,
    totalResponses2: 0
  },

  {
    option1: "20g of ice cream",
    option2: "40g of butter",
    reponseText: "20g of ice cream and 40g of butter have the same amount of fat",
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

]);