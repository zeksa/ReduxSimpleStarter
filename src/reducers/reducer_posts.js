import {FETCH_POSTS} from '../actions'
import {FETCH_POST} from '../actions'

const INITIAL_STATE = {all: [], post: null};

export default function (state = INITIAL_STATE, action = null) {
    switch (action.type) {
        case FETCH_POST:
            return {...state, all: action.payload.data};
        case FETCH_POSTS:
            return {...state, all: action.payload.data};
        default:
            return state;
    }
}