export const getChat = (store) => store.chat;
export const getChatList = (store) => getChat(store)?.chatList || [];
export const getChatById = (store) => (chatId) => getChatList(store).find(({ id }) => id===chatId);