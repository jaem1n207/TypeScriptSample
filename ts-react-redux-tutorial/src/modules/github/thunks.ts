import { ThunkAction } from "redux-thunk";
import { RootState } from "..";
import { GithubAction } from "./types";
import { getUserProfile } from "../../api/github";
import { getuserProfileAsync } from "./actions";

export function getuserProfileThunk(
  username: string
): ThunkAction<Promise<void>, RootState, null, GithubAction> {
  return async dispatch => {
    const { request, success, failure } = getuserProfileAsync;
    dispatch(request());
    try {
      const userProfile = await getUserProfile(username);
      dispatch(success(userProfile));
    } catch (e) {
      dispatch(failure(e));
    }
  };
}
