// Search Action Types
export const SEARCH_INPUT = 'search/input';

// Action Creator cho tìm kiếm
export const SetSearchStr = (searchStr) => ({
    type: SEARCH_INPUT,
    payload: searchStr
});