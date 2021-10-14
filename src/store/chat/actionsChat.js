export const CHAT_ADD = "CHATS::CHAT_ADD";
export const CHAT_REMOVE = "CHATS::CHAT_REMOVE";

export const chatAdd =(nameChat)=> ({
  type: CHAT_ADD,
  payload: 
    nameChat,
  
})

export const chatRemove =(chatId)=>( {
  type: CHAT_REMOVE,
  payload: chatId
})

