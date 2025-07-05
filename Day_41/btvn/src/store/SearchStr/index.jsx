import { SEARCH_INPUT } from './action.jsx';

export const searchReducer = (state = null, action) => {
    switch (action.type) {
        case SEARCH_INPUT:
            return action.payload;
        default:
            return state;
    }
};