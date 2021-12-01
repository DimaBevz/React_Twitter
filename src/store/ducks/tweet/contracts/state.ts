import { Tweet } from "../../tweets/contracts/state";

export enum LoadingState {
    LOADED = 'LOADED', // loaded state
    LOADING = 'LOADING',
    ERROR = 'ERROR', // error state
    NEVER = 'NEVER', // never state (вообз=ще ничего не загружно, не было никогда ничего загружено  )
}

export interface TweetDataState {
    data?: Tweet;
    loadingState: LoadingState;
}