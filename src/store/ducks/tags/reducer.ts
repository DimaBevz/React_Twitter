import produce, { Draft } from 'immer';
import { TagsActions, TagsActionsType } from './actionCreators';
import { LoadingState, TagsState } from './contracts/state';


const initialTagsState:TagsState = {
    items:  [],
    loadingState: LoadingState.NEVER,
};

// описываем  редьюсер
export const tagsReducer = produce((draft: Draft<TagsState>, action: TagsActions) => {
    // так как мы юзаем иммер, то писать ретурн не нужно

    // когда нам приходит action - SET_TAGS, то мы просто будем заменять свойство "draft.items"
    // при этом "produce" будет возвращать весь стейт
    switch (action.type) {
        case TagsActionsType.SET_TAGS:
            draft.items = action.payload;
            draft.loadingState = LoadingState.LOADED; 
            break;
        
        case TagsActionsType.FETCH_TAGS:
            draft.items = [];
            draft.loadingState = LoadingState.LOADING; 
            break;
        
        case TagsActionsType.SET_LOADING_STATE:
// когда мы пытаемся получить список твитов соответственно мы получаем новые твиты, а потом сделать ещё проверку на статус
            draft.loadingState = action.payload; 
            break;
    
        default:
            break;
    }

}, initialTagsState);
