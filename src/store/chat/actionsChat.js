export const CHAT_ADD = "CHATS::CHAT_ADD";
export const CHAT_REMOVE = "CHATS::CHAT_REMOVE";

export const chatAdd =(chatId, nameChat)=> ({
  type: CHAT_ADD,
  payload: 
    chatId,
    nameChat
  
})

export const chatRemove =(chatIdDel)=>( {
  type: CHAT_REMOVE,
  payload: chatIdDel
})

