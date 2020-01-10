use healthyquiz;

db.dropDatabase();

db.questions.insertMany([
    {
        option1: "20g of ice cream",
        option2: "40g of butter",
        reponseText: "20g of ice cream and 40g of butter have the same amount of fat",
        url1: "@/assets/ice-cream.jpg",
        url2: "@/assets/butter.jpg",
        totalResponses1: 0,
        totalResponses2: 0
    },

]);

db.users.insertMany([
    {
        responses: [1,2,1,1,2,2,1,2],
        latitude: "55.865426",
        longitude: "-4.257861"
    },

]);
