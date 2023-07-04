import axios from "axios";
import ActionTypes from "../constants";
import { SERVER } from "../../utils";





const RegisterUser = (userdata) => {
 

  return (dispatch) => {

    dispatch({
      type: ActionTypes.GET_REGISTER_USER_PROFILE_LOADING,
    })

    axios.post(`${SERVER}/auth/signup`, userdata)

      .then((res) => {
        dispatch({
          type: ActionTypes.GET_REGISTER_USER_PROFILE,
          payload: res.data,
        });
      
      })

      .catch((err) =>
        dispatch({
          type: ActionTypes.GET_REGISTER_USER_PROFILE_ERROR,
          payload: err,
        })
      )

  };

};

export { RegisterUser };