import { DUMMY_ACTION } from '../../constants'

const initialState = {}

// The reducer needs to be a function and accept
// 'state' and 'action' as arguments
export default (state = initialState, action) => {
    switch(action.type) {
        case(DUMMY_ACTION):
            console.log('WOW! Nothing happened!')
            return { ...state, dummy: true };
        default:
            return state;
    }
}