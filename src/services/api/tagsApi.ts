import axios from "axios"
import { TagsState } from "../../store/ducks/tags/contracts/state";

export const TagsApi = {
    fetchTags(): Promise<TagsState['items']> {
        // return axios.get('https://trycode.pw/c/5GAM7.json').then(({data}) => data);
        return axios.get('http://localhost:3001/themes').then(({data}) => data);
    }
} 