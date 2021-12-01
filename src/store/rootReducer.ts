import { combineReducers } from "redux";
import { tagsReducer } from "./ducks/tags/reducer";
import { tweetsReducer } from "./ducks/tweets/reducer";
import { TweetDataReducer } from './ducks/tweet/reducer';

export const rootReducer = combineReducers({
    tweets: tweetsReducer,
    tags: tagsReducer,
    tweet: TweetDataReducer,
});