import { SET_CRYPTO_LISTINGS } from "../reducers";
import axios from "axios";

export const getCryptoListings = () => {
  return dispatch => {
    dispatch(setLoadingStatus(true));
    return axios.get("http://127.0.0.1:8080/cryptolist").then(response => {
      dispatch(setLoadingStatus(false));
      dispatch(setCryptoListings(response.data));
    });
  };
};

const setLoadingStatus = status => {
  return {
    type: "SET_LOADING_STATUS",
    data: status
  };
};
export const setCryptoListings = data => {
  return { type: SET_CRYPTO_LISTINGS, data };
};
