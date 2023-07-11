import fetch from "auth/FetchInterceptor";
import axios from "axios";
const usersService = {};

usersService.getUsers = function (params) {
  return fetch({
    url: "/users",
    method: "get",
    params,
  });
};

// const usersService = {
//   getUsers: () => {
//     return axios.get("https://jsonplaceholder.typicode.com/users");
//   },
// };

export default usersService;
