const express = require('express');
const app = express();
const cors = require("cors");
const morgan = require('morgan')
const rout = require("./Router/route")
const mongoose = require('mongoose')

const corsConfig = {
    origin: "*",
    optionsSuccessStatus: 200,
  };

app.use(cors(corsConfig));
app.use(express.json());
app.use(morgan("tiny"));

const PORT = 3005;

app.use("/", rout)

const conec = async  () => {
    await mongoose.set('strictQuery', true);
    await mongoose.connect('mongodb+srv://brayanmar:cr843phw@brayitan.1c0wfx1.mongodb.net/?retryWrites=true&w=majority',console.log('se levanto el DB'));
  

   app.listen(PORT || 3001, () => console.log("SERVER OPEN IN PORT"));
} 
conec();