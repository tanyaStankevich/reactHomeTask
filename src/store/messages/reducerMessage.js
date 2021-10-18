import { MESSAGE_ADD } from "./actionsMessage";

export const initialState = {
    //{[chatId]: [{id, message, author}]}

    messageList:{},
};

// const addMessageWithThunk = (chatID, message) => (dispatch, getState) => {
//     // dispatch(messageAdd(chatId, message));
//     // if (message.author !== 'BOT') {
//     //   const botMessag = 'i am bot';
//     //   setTimeout(() => dispatch(messageAdd(chatId, botMessag)), 2000);
//     // }
//   };

export const MessageReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case MESSAGE_ADD: {
            const { chatId, message } = action.payload;
            const newMessageList = {
                ...state.messageList,
            }

            if (chatId in newMessageList) {
                newMessageList[chatId] = [
                    ...newMessageList[chatId],
                    message,
                ]
            } else {
                newMessageList[chatId] = [
                    message,
                ]
            }
            return {
    messageList: newMessageList,
}


        }
            
        default: return state;
    }
        
}