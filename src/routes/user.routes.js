import  Express  from "express";
import { createUser, searchUserFromId, searchUserFromName } from "../controllers/user.controller.js";
const userRoute = Express.Router()


userRoute.post("/create-user", (req, res) =>{
    const {name,email,password,relationship} = req.body
    const newUser = createUser(name,email,password,relationship)
    res.status(201).json({newUser})
})

userRoute.get("/find-userId/:id", (req, res) =>{
    const userId = req.params.id
    const user = searchUserFromId(userId)
    res.json({user})

})

userRoute.get("/find-userName/:name", (req, res) =>{
    const userName = req.params.name
    const user = searchUserFromName(userName)
    res.json({user})

})

export {userRoute}