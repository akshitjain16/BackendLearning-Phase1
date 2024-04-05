import express from "express";
import {create, getAll, getOne, update, deleteUser } from "../controller/usercontroller.js";

const route = express.Router();

route.post("/create", create);
route.get("/getall", getAll);
route.get("/getone/:id", getOne);
route.put("/update/:id", update);
route.delete("/delete/:id", deleteUser);
// route.post("/sendemail",sendEmail);
export default route;