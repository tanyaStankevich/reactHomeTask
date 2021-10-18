import { CHAT_ADD, CHAT_REMOVE } from "./actionsChat";


export const initialStateChat = {
    chatList: []
};

let chatId = 0;
export const ChatReducer = (state = initialStateChat, action) => {
    switch (action.type) {
        case CHAT_ADD: {
            // const { chatId, nameChat } = action.payload;
            
            return {
             ...state,                  
                chatList: [...state.chatList,
                    {
                        chatId: chatId++,
                        nameChat: action.nameChat
                    }
                        
                    ]
               
            }
 
        };
        case CHAT_REMOVE: {
            return {
                chatList: state.chatList.filter(({id})=>id!=action.chatId)
                    
                
            }
            
        };
            
        default: return state;
    }
        
}