const express = require("express");
const app = express();
const MongoClient = require("mongodb").MongoClient;
const createRouter = require("./helpers/create_router");
const cors = require("cors");
const parser = require("body-parser");

app.use(cors());
app.use(parser.json());

MongoClient.connect("mongodb://localhost:27017", (error, client) => {
  if (error) {
    console.log(error);
  }

  const db = client.db("healthyquiz");
  const questionCollection = db.collection("questions");
  const questionsRouter = createRouter(questionCollection);
  app.use("/api/questions", questionsRouter);

  const userCollection = db.collection("users");
  const usersRouter = createRouter(userCollection);
  app.use("/api/users", usersRouter);

  app.listen(3000, function() {
    console.log(`app listening on port ${this.address().port}`);
  });
});
