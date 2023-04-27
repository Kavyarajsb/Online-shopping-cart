const initialState = {
  username: "",
  password: "",
  loginStatus: "",
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return {
        ...state,
        username: action.payload.username,
        password: action.payload.password,
        loginStatus: "loading",
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        loginStatus: "success",
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        loginStatus: "failure",
      };
    default:
      return state;
  }
};

export default loginReducer;
