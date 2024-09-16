const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require("./routes/workouts");
require('dotenv').config();

const dbURL =
  'mongodb+srv://aditya:adiz8888@netninjamearn.rhhiw.mongodb.net/?retryWrites=true&w=majority&appName=netNinjaMEARN';

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path,req.method);
  next();
});

app.use("/api/",routes)

mongoose.connect(dbURL)
.then(function () {
  app.listen(process.env.PORT, () => {
    console.log('On port: ' + process.env.PORT);
  });
})
.catch(err=>console.log(err));
