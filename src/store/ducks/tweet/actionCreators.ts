import { Tweet } from "../tweets/contracts/state";
import {
  FetchTweetDataActionInterface,
  SetTweetDataActionInterface,
  SetTweetDataLoadingStateActionInterface,
  TweetDataActionsType,
} from "./actionTypes";
import { LoadingState } from "./contracts/state";

export const setTweetData = (payload: Tweet): SetTweetDataActionInterface => ({
  type: TweetDataActionsType.SET_TWEET_DATA,
  payload,
});

export const setTweetDataLoadingState = (
  payload: LoadingState
): SetTweetDataLoadingStateActionInterface => ({
  type: TweetDataActionsType.SET_LOADING_STATE,
  payload,
});

export const fetchTweetData = (payload: string): FetchTweetDataActionInterface => ({
  type: TweetDataActionsType.FETCH_TWEET_DATA,
  payload
});

export type TweetDataActions =
  | SetTweetDataActionInterface
  | FetchTweetDataActionInterface
  | SetTweetDataLoadingStateActionInterface;
