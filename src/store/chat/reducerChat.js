import { CHAT_ADD, CHAT_REMOVE } from "./actionsChat";


export const initialStateChat = {
    chatList: []
};


export const ChatReducer = (state = initialStateChat, action) => {
    switch (action.type) {
        case CHAT_ADD: {
            return {
                               
                chatList: [...state.chatList,
                    action.payload,
                ]
               
            }
 
        };
        case CHAT_REMOVE: {
            return {
                chatList: state.chatList.filter(({id})=>id!=action.payload)
                    
                
            }
            
        };
            
        default: return state;
    }
        
}