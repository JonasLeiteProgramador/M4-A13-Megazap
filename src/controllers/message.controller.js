import { Message } from "../models/Message.model.js";
import { userList } from "./user.controller.js";

let listMessage =[];





export const createMessage = (message, sender, receiver) => {
   let user = userList.find(data => data.name === sender);
   let userReceiver = userList.find(data => data.name === receiver);
   let userIndex = userList.findIndex(data => data.name === userReceiver.name)
 
   let userRelationchip = userList[userIndex].relationship === 'colega';
 
  
   if(!user || !userReceiver){
   
  
  
   
    return 'Um dos usuarios nao existe!'
   
   }
   else if(!userRelationchip){
      return 'Você não é amigo deste usuario'
    }



   const newMessage = new Message(message, sender, receiver);
   listMessage.push(newMessage);
   return newMessage;
};

export const getAllMessages = () => {
    return listMessage;
};

export const updateFavoriteMessage = (id) => {
   const messageIndex = listMessage.findIndex(message => message.id === id);
   if( listMessage[messageIndex].favorite != false){
    listMessage[messageIndex].favorite = false;
   }else{
    listMessage[messageIndex].favorite = true;
   }
   return listMessage[messageIndex];
}


