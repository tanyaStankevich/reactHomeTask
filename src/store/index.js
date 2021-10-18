import { ProfileReducer } from "./profile/reducer";
import { ChatReducer } from "./chat/reducerChat";
import { MessageReducer } from "./messages/reducerMessage";

import thunk from 'redux-thunk';
import { applyMiddleware, combineReducers, createStore, compose } from "redux";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(combineReducers({
    profile: ProfileReducer,
    chat: ChatReducer,
    message: MessageReducer
}), composeEnhancers(applyMiddleware(thunk)));
