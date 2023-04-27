import { put, call, takeLatest, all } from "redux-saga/effects";
import axios from "axios";
import { Modal } from "antd";
import config from "../services/config.json";
import { loginSuccess, loginFailure } from "../Redux/signinAction";



function* login(action) {
  const { navigate } = action.payload;
  try {
    const response = yield call(axios.post, `${config.api_base_url}/main/login`, {
      username: action.payload.username,
      password: action.payload.password,
    });
    console.log(response.data);
    if (response.data.success) {
      yield put(loginSuccess(response.data));
      Modal.success({
        content: `User has been successfully logged in!`,
        onOk: () => {
          navigate("/home") 
        },
      });
    } else {
      yield put(loginFailure("Something went wrong. Please try again."));
      Modal.error({
        content: `Something went wrong. Please try again.`,
      });
    }
  } catch (error) {
    yield put(loginFailure("Invalid username or password. Please try again later."));
    Modal.error({
      content: `Invalid username or password. Please try again later.`,
    });
    console.error(error);
  }
}

function* watchLogin() {
  yield takeLatest("LOGIN_REQUEST", login);
}

export default function* rootSaga() {
  yield all([watchLogin()]);
}
