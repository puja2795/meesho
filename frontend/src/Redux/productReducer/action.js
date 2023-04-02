import {
  PRODUCT_FAILURE,
  PRODUCT_REQUEST,
  GET_PRODUCT_FOR,
  SET_PRODUCT_FOR,
  GET_PRODUCT_SUCCESS,
} from "../actionType";
import axios from "axios";

export const getProductFor = () => {
  return { type: GET_PRODUCT_FOR };
};

export const setProductFor = (payload) => {
  return { type: SET_PRODUCT_FOR, payload };
};

export const productRequest = () => {
  return { type: PRODUCT_REQUEST };
};

export const productFailure = () => {
  return { type: PRODUCT_FAILURE };
};

export const getProductSuccess = (payload) => {
  return { type: GET_PRODUCT_SUCCESS, payload };
};

export const getProducts = (params) => (dispatch) => {
  console.log(params);
  dispatch(productRequest());
  axios
    .get("http://localhost:8080/product", { params })
    .then((res) => {
      dispatch(getProductSuccess(res.data));
    })
    .catch((err) => dispatch(productFailure()));
};
