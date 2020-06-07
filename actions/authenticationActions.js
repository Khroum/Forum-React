import {AUTH_FAILURE, AUTH_SUCCESS} from '../reducers/authenticationReducer';

export const authSuccess = (token) => {
  return {
    type: AUTH_SUCCESS,
    payload: {
      token,
    },
  };
};

const authFailure = () => {
  return {
    type: AUTH_FAILURE,
  };
};

// export const login = (username, password) => {
//   fetch(`${API_URL}/login`, {
//     method: 'POST',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       username: 'kamilos',
//       password: 'Forum55',
//     }),
//   })
//       .then((response) => {
//         if (response.ok) {
//           let token = response.headers.get(AUTH_HEADER);
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//       });
// };
