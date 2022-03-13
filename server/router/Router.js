import Express from "express";

// components
import { addUser, getUsers } from "../controller/user-controller.js";
import { newConversation, getConversation } from '../controller/conversation-controller.js';
import { getMessages, newMessage } from "../controller/message-controller.js";

const route = Express.Router();

// defining add API and call addUser() function on post request sent
route.post('/add', addUser);
route.get('/users', getUsers);

route.post('/conversation/add', newConversation);
route.post('/conversation/get', getConversation);

route.post('/message/add', newMessage);
route.get('/message/get/:id', getMessages);

export default route;