import { STATUSES } from "./GistsConst";

const initialState = {
    gists: [],
    request: STATUSES.IDLE,
    error: null,
};

export const reducerGist = (state = initialState, action) => {
    switch (action.type) {
        case GET_GISTS_REQUEST:
            return {
                ...state,
                request: STATUSES.REQUEST,
            };
        case GET_GISTS_SUCCESS:
            return {
                ...state,
                request: STATUSES.SUCCESS,
                articles: action.payload,
            };
        case GET_GISTS_FAILURE:
            return {
                ...state,
                request: STATUSES.FAILURE,
                error: action.payload,
            };



        default: return state;
    }
}