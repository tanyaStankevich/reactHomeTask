export const MESSAGE_ADD = "MESSAGES::MESSAGE_ADD";
/**
 * @param message {object}
 * @param message.id {string}
 * @param message.message {string}
 * @param message.author {string} 
 * @param chatId {number}

**/
export const messageAdd = (chatId, message) => ({
  type: MESSAGE_ADD,
  payload: {
    chatId,
    message, 
  }
 
})

