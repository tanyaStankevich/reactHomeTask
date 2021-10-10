import { MESSAGE_ADD } from "./actionsMessage";

export const initialState = {
    //{[chatId]: [{id, text, author}]}

    messageList:{},
};
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