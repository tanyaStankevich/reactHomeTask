import { PROFILE_ACTION } from "./actions";

export const initialState = {
    show: false,
    nameChat: 'Default'
};
export const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case PROFILE_ACTION: {
            return {
                ...state,
                show: !state.show,
            }
        }
            
        default: return state;
    }
        
}