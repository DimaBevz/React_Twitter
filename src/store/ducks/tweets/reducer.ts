import produce, { Draft } from 'immer';
import { TweetsActions, TweetsActionsType } from './actionCreators';
import { LoadingState, TweetsState } from './contracts/state';


const initialTweetsState:TweetsState = {
    items:  [],
    loadingState: LoadingState.NEVER,
};

// описываем  редьюсер
export const tweetsReducer = produce((draft: Draft<TweetsState>, action: TweetsActions) => {
    // так как мы юзаем иммер, то писать ретурн не нужно

    // когда нам приходит action - SET_TWEETS, то мы просто будем заменять свойство "draft.items"
    // при этом "produce" будет возвращать весь стейт
    switch (action.type) {
        case TweetsActionsType.SET_TWEETS:
            draft.items = action.payload;
            draft.loadingState = LoadingState.LOADED; 
            break;
        
        case TweetsActionsType.FETCH_TWEETS:
            draft.items = [];
            draft.loadingState = LoadingState.LOADING; 
            break;
        
        case TweetsActionsType.SET_LOADING_STATE:
// когда мы пытаемся получить список твитов соответственно мы получаем новые твиты, а потом сделать ещё проверку на статус
            draft.loadingState = action.payload; 
            break;
    
        default:
            break;
    }

}, initialTweetsState);
