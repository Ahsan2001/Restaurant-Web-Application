import axios from "axios";
import ActionTypes from "../constants";
import { SERVER } from "../../utils";

const getUser = (values) => {

    return (dispatch) => {
        dispatch({
            type: ActionTypes.GET_USER_PROFILE_LOADING,
        });
        axios.post(`${SERVER}/api/auth/signup`,values)
            .then((res) => {
                dispatch({
                    type: ActionTypes.GET_USER_PROFILE,
                    payload: res.data,
                });
                
            })
            .catch((err) =>
                dispatch({
                    type: ActionTypes.GET_USER_PROFILE_ERROR,
                    payload: err.message,
                })
            );
    };
};

export { getUser };