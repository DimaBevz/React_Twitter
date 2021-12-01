import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from "./rootReducer";
import { TweetsState } from './ducks/tweets/contracts/state';
import rootSaga from "./saga";
import { TagsState } from "./ducks/tags/contracts/state";
import { TweetDataState } from "./ducks/tweet/contracts/state";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const sagaMiddleWare = createSagaMiddleware();

export interface RootState {
  tweets: TweetsState;
  tags: TagsState;
  tweet: TweetDataState;
};

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleWare)));

sagaMiddleWare.run(rootSaga);