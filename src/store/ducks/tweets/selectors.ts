import { RootState } from "../../store";
import { LoadingState, TweetsState } from "./contracts/state";
import { createSelector } from "reselect";

export const selectTweets = (state: RootState): TweetsState => state.tweets;

export const selectLoadingState = (state: RootState): LoadingState =>
  selectTweets(state).loadingState;

export const selectIsTweetsLoading = (state: RootState): boolean =>
  selectLoadingState(state) === LoadingState.LOADING;

export const selectIsTweetsLoaded = (state: RootState): boolean => 
  selectLoadingState(state) === LoadingState.LOADED;

// этот селектор нам нужен для того, чтобы мы могли более удобным спосоом вытаскивать те данные, которые нам нужны
export const selectTweetsItems = createSelector(
  selectTweets,
  (tweets) => tweets.items
);
// эта ф-я вызывает селектор => он будет вызывать этот вот selectTweets (твитс), далее этот твит будет возвращать редьюсер твитов
// далее он будет вытаскивать  "tweets.items"

// createSelector по большей части нужен для того, когда происходят какие-то определённые действий, например вычисления
// и мы не хотим, чтобы эти вычисления происходили до тех пор пока какой-то там аргумент или состояние не изменится
