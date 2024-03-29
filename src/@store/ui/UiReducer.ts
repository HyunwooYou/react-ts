import { TOGGLE_SIDEBAR, TOGGLE_SEARCH_MODAL } from "./UiAction";

const initialState = {
  sidebar: true,
  searchModal: false
};

const UiReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return {
        sidebar: !state.sidebar
      };
    case TOGGLE_SEARCH_MODAL:
      return {
        searchModal: !state.searchModal
      };
    default:
      return state;
  }
};

export default UiReducer;
