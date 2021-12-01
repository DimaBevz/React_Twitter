import produce, { Draft } from 'immer';
import { TweetDataActions } from './actionCreators';
import { TweetDataActionsType } from './actionTypes';
import { LoadingState, TweetDataState } from './contracts/state';


const initialTweetDataState:TweetDataState = {
    data: undefined,
    loadingState: LoadingState.NEVER,
};

// описываем  редьюсер
export const TweetDataReducer = produce((draft: Draft<TweetDataState>, action: TweetDataActions) => {

    switch (action.type) {
        case TweetDataActionsType.SET_TWEET_DATA:
            draft.data = action.payload;
            draft.loadingState = LoadingState.LOADED; 
            break;
        
        case TweetDataActionsType.FETCH_TWEET_DATA:
            // когда мы запрашиваем твит, то у нас будет очищаться редьюсер
            draft.data = undefined;
            draft.loadingState = LoadingState.LOADING; 
            break;
        
        case TweetDataActionsType.SET_LOADING_STATE:
            draft.loadingState = action.payload; 
            break;
    
        default:
            break;
    }

}, initialTweetDataState);
