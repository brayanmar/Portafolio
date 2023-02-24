const express = require('express');
const app = express();
const cors = require("cors");
const morgan = require('morgan')
const rout = require("./Router/route")
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const { PORT, URL_MON } = process.env;
const corsConfig = {
    origin: "*",
    optionsSuccessStatus: 200,
  };
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors(corsConfig));
app.use(express.json());
app.use(morgan("tiny"));

let MONGO_URL= `mongodb://mongo:tRUWLfsp5pud1C80XATx@containers-us-west-88.railway.app:6943`

//console.log(URL_MON)

app.use("/", rout)

const conec = async  () => {
    await mongoose.set('strictQuery', true);
    await mongoose.connect(MONGO_URL,{ useNewUrlParser: true, useUnifiedTopology: true },console.log('se levanto el DB'));
  

   app.listen(PORT || 3001, () => console.log("SERVER OPEN IN PORT 3001"));
} 
conec();