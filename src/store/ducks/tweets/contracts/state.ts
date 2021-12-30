export enum LoadingState {
    LOADED = 'LOADED', // loaded state
    LOADING = 'LOADING',
    ERROR = 'ERROR', // error state
    NEVER = 'NEVER', // never state (вообз=ще ничего не загружно, не было никогда ничего загружено  )
}

export enum AddFormState {
    LOADING = 'LOADING',
    ERROR = 'ERROR', 
    NEVER = 'NEVER',
}

export interface Tweet {
    _id: string;
    text: string;
    user: {
        fullName: string;
        userName: string;
        avatarUrl: string;
    };
}

export interface TweetsState {
    items: Tweet[];
    loadingState: LoadingState;
    addFormState: AddFormState;
}