import ActionTypes from "../constants";

const INITIAL_STATE = {
    data: {},
    loading: false,
    error: "",
};

const getUserReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.GET_USER_PROFILE_LOADING:
            return {
                ...state,
                loading: true,
            };

        case ActionTypes.GET_USER_PROFILE:
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: "",
            };

        case ActionTypes.GET_USER_PROFILE_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
                data: {},
            };

        default:
            return state;
    }
};

export { getUserReducer };