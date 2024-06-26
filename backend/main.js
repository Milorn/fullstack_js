const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const donorsRoutes = require('./routes/donors.routes');

const notFoundMiddle = require('./middlewares/notFound.middleware');
const errorMiddleware = require('./middlewares/error.middleware');

const app = express();

app.use(express.json());
app.use(cors());

app.use(donorsRoutes);

app.use(notFoundMiddle);
app.use(errorMiddleware);

const start = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/blood");
    app.listen(3000, () =>
      console.log("App started on: http://127.0.0.1:3000")
    );
  } catch (err) {
    console.log("Error while starting");
  }
};
start();
