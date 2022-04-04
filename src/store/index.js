import { createStore } from "redux";
import reducers from '../reducers';

export const initialState = {
    nature: null,
    intentions: null,
    time: 0,
    instructions: null
};
export const store = createStore(reducers);
