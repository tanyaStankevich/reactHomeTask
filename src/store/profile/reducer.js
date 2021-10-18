import { CHANGE_NAME } from "./actions";

export const initialState = {
    // show: false,
    nameProfile: 'Default'
};


export const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case CHANGE_NAME:
            return {
            ...state,
            nameProfile: action.payload
            }

            
        default: return state;
    }
        
}