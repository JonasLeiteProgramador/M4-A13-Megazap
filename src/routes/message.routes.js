import { Router } from "express";
import { createMessage, getAllMessages, updateFavoriteMessage } from "../controllers/message.controller.js";
const messageRouter = Router();

messageRouter.post("/message", (req,res)=> {
    const { message, sender, receiver } = req.body;
    const newMessage = createMessage(message, sender, receiver);
    res
    .status(201)
    .json(newMessage);
});

messageRouter.get("/message", (req,res)=> {
    const messages = getAllMessages();
    res
    .status(200)
    .json(messages);
});

messageRouter.patch("/message-favorite", (req,res)=> {
    const id = req.body.id;
    const message = updateFavoriteMessage(id);
    res
    .status(200)
    .json(message);
});

export { messageRouter }