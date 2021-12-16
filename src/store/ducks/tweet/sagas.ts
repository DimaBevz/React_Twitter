import { call, put, takeLatest} from 'redux-saga/effects';
import { setTweetData, setTweetDataLoadingState } from './actionCreators';
import { LoadingState } from './contracts/state';
import { TweetsApi } from './../../../services/api/tweetsApi';
import { FetchTweetDataActionInterface, TweetDataActionsType } from './actionTypes';
import { Tweet } from '../tweets/contracts/state';


export function* fetchTweetDataRequest({payload: tweetId}: FetchTweetDataActionInterface) {
    try {
        const data: Tweet[] = yield call(TweetsApi.fetchTweetData, tweetId);  
        yield put(setTweetData(data[0])); 
    } catch (error) {
        yield put(setTweetDataLoadingState(LoadingState.ERROR));  
    }
}

export function* tweetDataSaga() {
    yield takeLatest(TweetDataActionsType.FETCH_TWEET_DATA, fetchTweetDataRequest)
}