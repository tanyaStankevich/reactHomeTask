export const getChat = (store) => store.chats;
export const getChatList = (store) => getChat(store)?.chatList || [];
export const getChatById = (store) => (chatId) => getChatList(store).find(({ id }) => id===chatId);