export const SET_CRYPTO_LISTINGS = "SET_CRYPTO_LISTINGS";
export const SET_LOADING_STATUS = "SET_LOADING_STATUS";
const initialState = {
  cryptoList: [],
  loading: true
};
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CRYPTO_LISTINGS:
      return { ...state, cryptoList: action.data };
    case SET_LOADING_STATUS:
      return { ...state, loading: action.data };
    default:
      return state;
  }
}
export default rootReducer;
