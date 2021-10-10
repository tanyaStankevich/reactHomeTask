export const getMessages = (store) => store.message;
export const getMessageList = (store) => getMessages(store)?.messageList || [];
export const getChMessage = (chatId) => (store) => getMessageList(store)[chatId];