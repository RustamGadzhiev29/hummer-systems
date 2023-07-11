import * as actionTypes from '../constants/Users';

const initialState = {
  users: [],
  loading: false,
  error: null
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_USERS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case actionTypes.GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        loading: false
      };
    case actionTypes.GET_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
      case actionTypes.DELETE_CLIENT_REQUEST:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
      case actionTypes.UPDATE_CLIENT_REQUEST:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.payload.id) {
            return {
              ...user,
              ...action.payload,
            };
          }
          return user;
        }),
      };
    default:
      return state;
  }
};

export default usersReducer;
