import { combineReducers } from 'redux';
import { DUMMY_ACTION } from '../../constants';

// Reducers
import recipe from './recipe';

const initialState = {};

const dummy = (state = initialState, action) => {
    switch(action.type) {
        case(DUMMY_ACTION):
            console.log('WOW! Nothing happened!')
            return { ...state, dummy: true };
        default:
            return state;
    }
};

export default combineReducers({
    dummy,
    recipe
});