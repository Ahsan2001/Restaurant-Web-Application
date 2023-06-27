import ActionTypes from "../constants";


const RegisterUser = {

    setLoading: (value) => ({
        type: ActionTypes.GET_REGISTER_USER_PROFILE_LOADING,
        payload: {loading: value}
    }),

    setResponse: (value) => ({
        type: ActionTypes.GET_REGISTER_USER_PROFILE,
        payload: {data: value}
    }),

    setError: (value) => ({
        type: ActionTypes.GET_REGISTER_USER_PROFILE_ERROR,
        payload: {error: value}
    })

};


export  {RegisterUser};