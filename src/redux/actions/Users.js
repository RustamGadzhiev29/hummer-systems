import * as actionTypes from '../constants/Users';

export const getUsersRequest = () => {
  return {
    type: actionTypes.GET_USERS_REQUEST
  };
};

export const getUsersSuccess = (users) => {
  return {
    type: actionTypes.GET_USERS_SUCCESS,
    payload: users
  };
};

export const getUsersFailure = (error) => {
  return {
    type: actionTypes.GET_USERS_FAILURE,
    payload: error
  };
};

export const deleteClientRequest = (clientId) => ({
  type: actionTypes.DELETE_CLIENT_REQUEST,
  payload: clientId,
});

export const updateClientRequest = (clientData) => ({
  type: actionTypes.UPDATE_CLIENT_REQUEST,
  payload: clientData,
});