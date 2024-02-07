import {v4 as uuidv4} from "uuid" 

export class User{
    constructor(name,email,password,relationship){

        this.id = uuidv4()
        this.name = name
        this.email = email
        this.password = password
        this.relationship = relationship
        this.createdAt = new Date().toUTCString()
    }
}