export enum LoadingState {
    LOADED = 'LOADED', // loaded state
    LOADING = 'LOADING',
    ERROR = 'ERROR', // error state
    NEVER = 'NEVER', // never state (вообз=ще ничего не загружно, не было никогда ничего загружено  )
}

export interface Tag {
    _id: string;
    name: string;
    count: number;
}

export interface TagsState {
    items: Tag[];
    loadingState: LoadingState;
}