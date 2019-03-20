import {
    GET_RECIPE,
    GET_RECIPES,
    ADD_RECIPE_SUCCESS,
    ADD_RECIPE_FAILED,
    REMOVE_RECIPE,
    MODIFY_RECIPE,
    LIKE_RECIPE,
    SHARE_RECIPE,
    FORK_RECIPE,
} from '../../constants';

const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        case (GET_RECIPE):
            return action.payload;
        case (GET_RECIPES):
            return action.payload;
        case (ADD_RECIPE_SUCCESS):
            console.log('Recipe added! ', action.payload);
            return state;
        case(ADD_RECIPE_FAILED):
            return state;
        case (REMOVE_RECIPE):
            return state;
        case (MODIFY_RECIPE):
            return state;
        case (LIKE_RECIPE):
            return state;
        case (SHARE_RECIPE):
            return state;
        case (FORK_RECIPE):
            return state;
        default:
            return state;
    }
};