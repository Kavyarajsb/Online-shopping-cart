export const loginRequest = (username, password, navigate) => ({
  type: "LOGIN_REQUEST",
  payload: { username, password, navigate},
});

export const loginSuccess = (data) => ({
  type: "LOGIN_SUCCESS",
  payload: data,
});

export const loginFailure = (error) => ({
  type: "LOGIN_FAILURE",
  payload: error,
});
