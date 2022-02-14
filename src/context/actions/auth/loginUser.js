import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  LOGIN_LOADING,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
} from "../../../constants/actionTypes";
import axiosInstance from "../../../helpers/axiosInterceptor";

export default ({ password, userName: username }) => (dispatch) => {
  dispatch({
    type: LOGIN_LOADING,
  });
  axiosInstance
    .post("auth/login", {
      password,
      username,
    })

    .then((res) => {
      AsyncStorage.setItem("token", res.data.token);
      AsyncStorage.setItem("user", JSON.stringify(res.data.user));
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response
          ? err.response.data
          : { error: "Something went wrong!" },
      });
    });
};
