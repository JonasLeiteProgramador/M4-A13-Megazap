import { User } from "../models/user.model.js";


let userList = [
    {name:"Jonas",email:"jonas@gmail.com",password:"fodao1234",relationship:"colega" },
    {name:"clebim",email:"clebim@gmail.com",password:"fodao1234",relationship:"não-colega"}
]

export function createUser(name,email,password,relationship){
    let newUser = new User(name,email,password,relationship)
    userList.push(newUser)
    return newUser
}

export function searchUserFromId(id){
    let user = userList.find(data => data.id === id)
    if(!user){
       return 'Usuario não encontrado !'
    } 
    return user

}


export function searchUserFromName(name){
    let user = userList.find(data => data.name === name)
    if(!user){
       return 'Usuario não encontrado !'
    } 
    return user

}

export {userList}