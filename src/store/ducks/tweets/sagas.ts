import { call, put, takeLatest } from "redux-saga/effects";
import {
  setTweets,
  setTweetsLoadingState,
  addTweet,
  setAddFormState,
} from "./actionCreators";
import { TweetsApi } from "./../../../services/api/tweetsApi";
import { AddFormState, LoadingState } from "./contracts/state";
import { FetchAddTweetActionInterface, TweetsActionsType } from "./contracts/actionTypes";

export function* fetchTweetsRequest(): any {
  try {
    const items = yield call(TweetsApi.fetchTweets);
    yield put(setTweets(items));
  } catch (error) {
    yield put(setTweetsLoadingState(LoadingState.ERROR));

    // yield put - то же самое что и диспатч в редаксе
  }
}

export function* fetchAddTweetRequest({ payload }: FetchAddTweetActionInterface): any {
  try {
    const data = {
      _id: Math.random().toString(36).substring(2),
      text: payload,
      user: {
        fullName: "Test, Test",
        userName: "Test",
        avatarUrl:
          "https://images.unsplash.com/random/100x100?5",
      }
    };
    const item = yield call(TweetsApi.addTweet, data);
    yield put(addTweet(item));
  } catch (error) {
    yield put(setAddFormState(AddFormState.ERROR));

    // yield put - то же самое что и диспатч в редаксе
  }
}

export function* tweetsSaga() {
  yield takeLatest(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest);
  yield takeLatest(TweetsActionsType.FETCH_ADD_TWEET, fetchAddTweetRequest);
}
