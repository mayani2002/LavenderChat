import Express from "express";

// components
import { addUser, getUsers } from "../controller/user-controller.js";


const route = Express.Router();

// defining add API and call addUser() function on post request sent
route.post('/add', addUser);
route.get('/users', getUsers);

export default route;