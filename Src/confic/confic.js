require("dotenv").config();
const mongoose = require("mongoose");
const url = process.env.URL;

const mongodb = () => {
  mongoose
    .connect(url)
    .then(() => {
      console.log("mongoodb is connected...🤞🤞✌️");
    })
    .catch((error) => {
      console.log(error);
    });
};
mongodb();
module.exports = { mongodb };
