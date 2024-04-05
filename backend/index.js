import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import bodyparser from "body-parser";
import dotenv from "dotenv";
import route from "./routes/userRoutes.js";
  
const app = express();
app.use(bodyparser.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 8000;
const URL= process.env.MONGOURL;

mongoose.connect(URL).then(()=>{
    console.log("DB connected successfully");

    app.listen(PORT, () =>{
        console.log(`Server running on port:${PORT}`);
    })
}).catch(error => console.log(error));


 app.use("/api", route)