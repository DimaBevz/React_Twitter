import axios from "axios"
import { Tweet, TweetsState } from './../../store/ducks/tweets/contracts/state';


export const TweetsApi = {
    fetchTweets(): Promise<TweetsState['items']> {
        // return axios.get('https://trycode.pw/c/TKK96.json').then(({data}) => data);
        return axios.get('http://localhost:3001/tweets').then(({data}) => data);
    },

    fetchTweetData(id: string): Promise<Tweet[]> {
        // return axios.get('https://trycode.pw/c/TKK96.json?_id=' + id).then(({data}) => data);
        return axios.get('http://localhost:3001/tweets?_id=' + id).then(({data}) => data);
    },

    addTweet(payload: Tweet): Promise<Tweet> {
        // return axios.get('https://trycode.pw/c/TKK96.json?_id=' + id).then(({data}) => data);
        return axios.post('http://localhost:3001/tweets', payload).then(({data}) => data);
    }
} 