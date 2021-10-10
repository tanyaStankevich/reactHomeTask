import { ProfileReducer } from "./profile/reducer";


import { combineReducers } from "redux";
import { ChatReducer } from "./chat/reducerChat";
import { MessageReducer } from "./messages/reducerMessage";


export const store = combineReducers({profile: ProfileReducer, chat: ChatReducer, message: MessageReducer}, window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__());
