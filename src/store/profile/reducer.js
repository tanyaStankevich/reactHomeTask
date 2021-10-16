import { CHANGE_NAME } from "./actions";

export const initialState = {
    // show: false,
    nameChat: 'Default'
};


export const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case CHANGE_NAME:
            return {
            ...state,
            nameChat: action.payload
            }

            
        default: return state;
    }
        
}