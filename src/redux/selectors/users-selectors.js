export const getUsersSelector = (state) => {
  return state.users;
};

export const getLoadingSelector = (state) => {
    return state.users.loading;
  };