import { getuserProfileAsync, GET_USER_PROFILE } from "./actions";
import { getUserProfile, GithubProfile } from "../../api/github";
import { call, put, takeEvery } from "redux-saga/effects";

function* getUserProfileSaga(
  action: ReturnType<typeof getuserProfileAsync.request>
) {
  try {
    const userProfile: GithubProfile = yield call(
      getUserProfile,
      action.payload
    );
    yield put(getuserProfileAsync.success(userProfile));
  } catch (e) {
    yield put(getuserProfileAsync.failure(e));
  }
}

export function* githubSaga() {
  yield takeEvery(GET_USER_PROFILE, getUserProfileSaga);
}
